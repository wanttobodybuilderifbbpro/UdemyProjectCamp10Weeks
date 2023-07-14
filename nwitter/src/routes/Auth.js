import { createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  signInWithPopup,GoogleAuthProvider,GithubAuthProvider,getAuth } from "firebase/auth";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();
  
  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data); // 데이터 확인을 위해 출력
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount(prev => !prev);
  const onSocialClick = async (event) => {
    const {
      target: {name},
    } = event;
    let provider;
    if(name === "google"){
      provider = new GoogleAuthProvider();
    } else if(name === "github") {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(auth, provider);
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password" // 비밀번호 필드에는 type="password"를 사용합니다.
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
      <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>
        <button onClick={onSocialClick} name="github">Continue with Github</button>
      </div>
    </div>
  );
};
export default Auth;
