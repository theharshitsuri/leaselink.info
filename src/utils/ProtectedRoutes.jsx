import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";  // Adjust the path as needed

const ProtectedRoutes = () => {
    const { currentUser, loading } = useAuth();

    // While loading, you may want to return a loader or nothing to avoid redirection loops
    if (loading) {
        return <div>Loading...</div>;  // Optional: replace with your loader component
    }

    // If the user is authenticated, render the Outlet, otherwise redirect to login
    return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
