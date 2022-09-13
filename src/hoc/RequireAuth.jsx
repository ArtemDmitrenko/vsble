import { useLocation, Navigate } from "react-router-dom";
import useAuth from "hooks/useAuth";

function RequireAuth({ children }) {
  const location = useLocation();
  const {
    user: { isAuth },
  } = useAuth();

  if (!isAuth) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;
