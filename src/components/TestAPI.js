import React from 'react'
import { useContext } from "react";
import { userDataContext } from "../context/UserDataContext";

export const TestAPI = () => {
  const { userData } = useContext(userDataContext);
  console.log("🚀 ~ file: TestAPI.js ~ line 7 ~ TestAPI ~ userData", userData)
 
  return (
    <div>
      <h1>{userData[0].username}</h1>
      <h1>TestAPI</h1>
    </div>
  );
}

