"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./AuthContext"; // Change to lowercase


const ProtectedRoute = ({ children }) => {
  const { user,login,userdata } = useAuth();
  const router = useRouter();

  useEffect(() => {
    debugger;
    console.log(user);
    console.log("login--->",userdata);
    if (!user) {
      router.push("/login"); // Redirect to login page if not authenticated
    }
    // else{
    //   //storeTokenInLS(response_data.token)
    //   router.push("/"); // Redirect to dashboard
    // }
  }, []);

  return <>{user ? children : null}</>; // Render children only if user is authenticated
};

export default ProtectedRoute;
