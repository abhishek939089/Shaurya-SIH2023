// UserContext.js
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userName, setUserName] = useState(" ");

  const updateUser = (name) => {
    setUserName(name);
  };

  return (
    <UserContext.Provider value={{ userName, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}