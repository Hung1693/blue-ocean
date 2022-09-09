import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "./constant";
export const userDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/users`);
      setUserData(response.data.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const userContextData = { userData };
  return (
    <userDataContext.Provider value={userContextData}>
      {children}
    </userDataContext.Provider>
  );
};
export default UserDataProvider;
