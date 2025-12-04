import React from "react";
import { AuthProvider } from "./AuthContext";
import { DomainProvider } from "./DomainContext";
import { SystemProvider } from "./SystemContext";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <DomainProvider>
        <SystemProvider>
          {children}
        </SystemProvider>
      </DomainProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
