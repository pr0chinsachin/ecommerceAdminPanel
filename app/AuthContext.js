"use client"
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // You can initialize user with the logged-in user data
  const [serverToken, setServerToken] = useState(null);
  // const storeTokenInLS =(serverToken)=>{
  //   return localStorage.setItem("token",serverToken);
  // }

  const login = (userData) => {
    // Implement login logic, set user data after successful login
    setUser(userData);
  };

  const logout = () => {
    // Implement logout logic, clear user data
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
