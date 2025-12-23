import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  //Core identity
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  //Banking-specific
  const [role, setRole] = useState(null);       // CUSTOMER, ADMIN, AUDITOR, etc.
  const [status, setStatus] = useState(null);   // ACTIVE, INACTIVE, SUSPENDED

  const [updatedAt, setUpdatedAt] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        phoneNumber, setPhoneNumber,
        role, setRole,
        status, setStatus
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
