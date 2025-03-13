import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./styles.css";
import Register from "./pages/AuthPage/Register";
import Login from "./pages/AuthPage/Login";
import HomePage from "./pages/AuthPage/HomePage";
import AreaGestion from "./pages/AuthPage/AreaGestion";
import { AuthProvider, useAuth } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<NavigateToDashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
          <Route path="/areagestion" element={<PrivateRoute element={<AreaGestion />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

const NavigateToDashboard = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/areagestion" /> : <Navigate to="/login" />;
};

const PrivateRoute = ({ element }: { element: React.ReactElement }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default App;
