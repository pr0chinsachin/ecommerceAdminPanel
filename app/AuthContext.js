"use client"
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({ user: null, login: () => { }, logout: () => { } });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // You can initialize user with the logged-in user data
  //const [serverToken, setServerToken] = useState(null);
  // const storeTokenInLS =(serverToken)=>{
  //   return localStorage.setItem("token",serverToken);
  // }
debugger
  const login = (userData) => {
    debugger;
    // Implement login logic, set user data after successful login
    console.log(userData)
    setUser(userData);
  };

  const logout = () => {
    // Implement logout logic, clear user data
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
