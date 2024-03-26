import React from "react";
import Navbar from "../ui-component/dashboard/navbar/navbar";
import Sidebar from "../ui-component/dashboard/sidebar/sidebar";
import Styles from "../ui-component/dashboard/dashboard.module.css";
import Footer from "../ui-component/dashboard/footer/footer";
import { AuthProvider } from "../AuthContext";
import ProtectedRoute from "../ProtectedRoute";
const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <div className={Styles.container}>
          <div className={Styles.menu}>
            <Sidebar />
          </div>
          <div className={Styles.content}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
};

export default Layout;
