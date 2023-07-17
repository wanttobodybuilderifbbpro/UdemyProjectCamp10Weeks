import React, { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import { auth } from "fBase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if(user){
        setIsLoggedIn(true);
        setUserObj(user);
        const uid = user.uid;
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <> 
      {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={ userObj } />
       : "Initializing..."}
      
    </> 
  );
}

export default App;
