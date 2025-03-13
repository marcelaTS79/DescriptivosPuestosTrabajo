import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";  
import { useNavigate } from "react-router-dom";
import styles from "./AuthPage.module.css";  

const Login = () => {
  const { login } = useAuth();  
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  
    if (email && password) {
      login();  
      navigate("/areagestion"); // Redirigir al Área de Gestión
    } else {
      alert("Por favor, ingresa tu correo y contraseña.");
    }
  };

  return (
    <div className={styles.loginRegistroPagina}>
      <header className={styles.logo}>
        <img src="/imagenes/logo.png" alt="Logo" />
      </header>
      <h1 className={styles.tituloDescriptivo}>Descriptivo de puestos de trabajo</h1>
      <div className={styles.loginForm}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="texto"
            placeholder="Usuario"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
          />
          <button type="submit">Ingresar</button>
        </form>
        <p>
          ¿No tienes cuenta?{" "}
          <a href="/register" className={styles.linkRegister}>
            Registrate
          </a>
        </p>
      </div>
      <footer>
        <p>Aplicación para la creación de descriptivos de puestos de trabajo - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Login;
