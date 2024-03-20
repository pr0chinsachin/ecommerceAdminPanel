import Layout from "././dashboard/layout";
import Dashboard from "./dashboard/page";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const Homepage = () => {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Layout>
          <Dashboard />
        </Layout>
      </ProtectedRoute>
    </AuthProvider>
  );
};

export default Homepage;
