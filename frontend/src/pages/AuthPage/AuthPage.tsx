import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import styles from "./AuthPage.module.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.authBox}>
        <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
        {isLogin ? <Login /> : <Register />}
        <button onClick={() => setIsLogin(!isLogin)} className={styles.toggleButton}>
          {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
