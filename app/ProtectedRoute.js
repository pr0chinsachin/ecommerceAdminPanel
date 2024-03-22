"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./AuthContext"; // Change to lowercase


const ProtectedRoute = ({ children }) => {
  const { storeTokenInLS } = useAuth();
  const router = useRouter();

  useEffect(() => {
    debugger;
    console.log(storeTokenInLS);
    if (!storeTokenInLS) {
      router.push("/login"); // Redirect to login page if not authenticated
    }else{
      //storeTokenInLS(response_data.token)
      router.push("/"); // Redirect to dashboard
    }
  },);

  return <>{storeTokenInLS && children}</>; // Render children only if user is authenticated
};

export default ProtectedRoute;
