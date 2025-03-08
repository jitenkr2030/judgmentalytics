import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface ProtectedRouteProps extends RouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login-signup" />}
    />
  );
};

export default ProtectedRoute;
