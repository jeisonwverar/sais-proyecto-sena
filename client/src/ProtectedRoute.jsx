import {Navigate,Outlet} from 'react-router-dom';
import { useAuth } from "./context/AuthContext"


function ProtectedRoute({ requiredRoles }) {
  const { loading, isAuthenticated, user } = useAuth();
  console.log('Loading:', loading);
  //console.log('Is Authenticated:', isAuthenticated);
  //console.log('User:', user);

  if (loading) {
   
    console.log("Loading...");
    return <h1>Loading...</h1>;
  }

  const includeRole = requiredRoles.includes(user?.role);

  if (!isAuthenticated && !user && !user.role && !includeRole) {
    
  

    return <Navigate to="/login" replace />;
  }

  
  
  return <Outlet />;
}

export default ProtectedRoute;