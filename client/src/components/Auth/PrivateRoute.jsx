import { Navigate } from 'react-router-dom';

// Function to check if user is authenticated
const isAuthenticated = () => {
    const token = localStorage.getItem("login");
    console.log("Auth Check Token:", token);
    return !!token; // Ensure it's not null or undefined
};
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/signin" />;  
};

export const logout = () => {
  localStorage.clear();
  window.location.reload() 
};

export default PrivateRoute;