import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)
  const [permissions, setPermissions] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);
  const [authProvider, setAuthProvider] = useState(null); 
  const [userContext, setUserContext] = useState(null);

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        token, setToken,
        email, setEmail,
        orgId, setOrgId,
        permissions, setPermissions,
        isLoading, setIsLoading,
        authError, setAuthError,
        expiresIn, setExpiresIn,
        authProvider, setAuthProvider,
        userContext, setUserContext,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
