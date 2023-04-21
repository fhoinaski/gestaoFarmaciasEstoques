import { Navigate, useLocation } from "react-router-dom";
import {useAuthState}  from "./contexts/userContext/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, loading } = useAuthState ();
  const location = useLocation();

  if (loading) {
    return <div>Carregando...</div>;    
  }

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
