import { createContext, useState, useContext, ReactNode, useMemo } from 'react';
import { login, logout } from './authFunctions';  // Importar solo las funciones

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Usamos useMemo para evitar recrear el objeto en cada render
  const value = useMemo(() => ({
    isAuthenticated,
    login: () => login(setIsAuthenticated),
    logout: () => logout(setIsAuthenticated),
  }), [isAuthenticated]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
