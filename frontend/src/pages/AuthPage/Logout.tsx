
import { useAuth } from "../../context/AuthContext";  // Importar el contexto de autenticación

const Logout = () => {
  const { logout } = useAuth();  // Obtener la función de logout desde el contexto

  // Llamar a logout al hacer clic en el botón
  const handleLogout = () => {
    logout();  // Cambiar el estado de autenticación
    // Aquí también puedes borrar cookies o tokens si es necesario
  };

  return (
    <div>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Logout;
