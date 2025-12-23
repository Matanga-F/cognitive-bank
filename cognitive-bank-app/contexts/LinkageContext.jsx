import React, { createContext, useState } from "react";

export const LinkageContext = createContext(null);

export const LinkageProvider = ({ children }) => {
  //Common linkage fields
  const [userId, setUserId] = useState(null);
  const [accountId, setAccountId] = useState(null);

  // Audit timestamps
  const [createdAt, setCreatedAt] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(null);

  return (
    <LinkageContext.Provider
      value={{
        userId, setUserId,
        accountId, setAccountId,
        createdAt, setCreatedAt,
        updatedAt, setUpdatedAt,
      }}
    >
      {children}
    </LinkageContext.Provider>
  );
};
