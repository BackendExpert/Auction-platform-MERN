import { Navigate } from 'react-router-dom';

// Function to check if user is authenticated
const isAuthenticated = () => {
  return !!localStorage.getItem('login'); // Check for token in localStorage
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/signin" />;
};

export const logout = () => {
  localStorage.clear();
  window.location.reload() 
};

export default PrivateRoute;