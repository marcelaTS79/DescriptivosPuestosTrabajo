export const login = (setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsAuthenticated(true);
  };
  
  export const logout = (setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsAuthenticated(false);
  };
  
  