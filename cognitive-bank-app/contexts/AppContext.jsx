// Minimal AppContext.jsx
import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [themeMode, setThemeMode] = useState('light');

  return (
    <AppContext.Provider value={{
      isLoading,
      setIsLoading,
      user,
      setUser,
      themeMode,
      setThemeMode
    }}>
      {children}
    </AppContext.Provider>
  );
};