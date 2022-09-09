import React from 'react'
import { useContext } from "react";
import { userDataContext } from "../context/UserDataContext";

export const TestAPI = () => {
    const { userData } = useContext(userDataContext);
    console.log("🚀 ~ file: TestAPI.js ~ line 7 ~ TestAPI ~ userData", userData)
  return (
      <div>TestAPI</div>
  )
}

