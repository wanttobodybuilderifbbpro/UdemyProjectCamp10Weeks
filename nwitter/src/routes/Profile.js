import { auth } from "fBase";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const signOutHandler = () => {
    auth.signOut().then(()=> navigate("/"));
  }
  return (
    <>
      <button onClick={signOutHandler}>Log out</button>
    </>
  )
}

export default Profile;
