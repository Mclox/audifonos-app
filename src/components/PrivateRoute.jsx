import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function PrivateRoute({ children }) { //rutas que requieren autenticación
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Cargando...</p>; 
  }

  if (!user) {
    return <Navigate to="/login" replace />; //Redirige al login
  }

  return children;
}

export default PrivateRoute;
