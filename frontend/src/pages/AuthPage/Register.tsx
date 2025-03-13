import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styles from "./AuthPage.module.css";

const Register = () => {
  const navigate = useNavigate(); // Inicializar useNavigate
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registro exitoso. Ahora inicia sesión"); // Aquí puedes integrar la lógica de registro
    navigate("/");
  };

  return (
    <div className={styles.loginRegistroPagina}>
      <header className={styles.logo}>
        <img src="/imagenes/logo.png" alt="Logo" />
      </header>
      <h1 className={styles.tituloDescriptivo}>Descriptivo de puestos de trabajo</h1>
      <div className={styles.loginForm}>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
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
          <button type="submit">Registrarse</button>
        </form>
        <p>
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className={styles.linkRegister}>
            Inicia sesión
          </a>
        </p>
      </div>
      <footer>
        <p>Aplicación para la creación de descriptivos de puestos de trabajo - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Register;
