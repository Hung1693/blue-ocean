import React from 'react'
import { useContext } from "react";
import { userDataContext } from "../context/UserDataContext";

export const TestAPI = () => {
  const { userData, getAllUsers } = useContext(userDataContext);
  
  const handleClick =  () => {
    getAllUsers();
    console.log("🚀 ~ file: TestAPI.js ~ line 9 ~ TestAPI ~ userData", userData)
  };
 
  return (
    <div>
      <button onClick={handleClick}>Get All Users</button>
          <div>
            {userData.map((user) => (
              <div key={user.user_id}>
                <p>{user.username}</p>
                <p>{user.password}</p>
              </div>
            ))}
          </div>
    </div>
  );
}

