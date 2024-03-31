import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const IsAuthenticated = () => {
    return useSelector((state) => state.auth.isAuthenticated); // Sélectionnez l'état d'authentification depuis le Redux store
  };
  
export const PrivateProfileRoute = ({ element }) => {
    return IsAuthenticated() ? element : <Navigate to="/login" />; // Renvoie l'élément de la route si l'utilisateur est authentifié, sinon null
};