import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};