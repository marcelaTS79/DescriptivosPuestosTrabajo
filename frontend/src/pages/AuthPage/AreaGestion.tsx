import { useNavigate } from "react-router-dom";
import { FaSearch, FaPlusCircle } from "react-icons/fa";
import './AreaGestion.css';

const AreaGestion = () => {
    const navigate = useNavigate();
  return (
    <>
      {/* Header */}
      <header>
      <img src="/imagenes/logo.png" alt="Logo" />
        
      </header>

      {/* Botones de Navegación */}
      <div className="navigation-buttons">
      <button className="back-btn" onClick={() => window.history.length > 1 ? navigate(-1) : navigate("/login")}>Volver</button>
      <button className="home-btn" onClick={() => navigate("/login")}>Inicio</button>
      </div>

      {/* Contenedor principal */}
      <div className="container">
        <div className="content-container">
          {/* Columna izquierda */}
          <div className="left-col">
            <h2>Importancia de los Descriptivos de Puestos</h2>
            <p>
              Los descriptivos de puestos son herramientas clave para organizar el trabajo dentro de una empresa. Permiten definir con claridad las responsabilidades, competencias y habilidades necesarias para cada puesto.
            </p>
            <p>
              Son esenciales para la gestión del talento humano, la selección de personal y la evaluación de desempeño. Un puesto bien descrito permite a los empleados entender mejor sus funciones y contribuye a la alineación de los objetivos organizacionales.
            </p>
          </div>

          {/* Columna derecha */}
          <div className="right-col">
          <h2>Área de Gestión de los Descriptivos</h2>
          <div className="button-group">
              <button className="search-btn">
                <FaSearch className="mr-2" />
                Buscar
              </button>
              <button className="create-btn">
                <FaPlusCircle className="mr-2" />
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>Aplicación para la creación de descriptivos de puestos de trabajo - Todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default AreaGestion;
