import React, { createContext, useState } from "react";

export const AccountContext = createContext(null);

export const AccountProvider = ({ children }) => {
  //Account details
  const [accountId, setAccountId] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);
  const [routingNumber, setRoutingNumber] = useState(null);
  const [accountType, setAccountType] = useState(null);       // CHECKING, SAVINGS, CREDIT, etc.
  const [accountStatus, setAccountStatus] = useState(null);   // ACTIVE, INACTIVE, CLOSED
  const [balance, setBalance] = useState(0);
  const [currency, setCurrency] = useState(null);             // USD, ZAR, EUR, etc.
  const [overdraftLimit, setOverdraftLimit] = useState(null);
  const [interestRate, setInterestRate] = useState(null);

  //User linkage
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);

  // Audit fields
  const [createdAt, setCreatedAt] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(null);

  return (
    <AccountContext.Provider
      value={{
        accountId, setAccountId,
        accountNumber, setAccountNumber,
        routingNumber, setRoutingNumber,
        accountType, setAccountType,
        accountStatus, setAccountStatus,
        balance, setBalance,
        currency, setCurrency,
        overdraftLimit, setOverdraftLimit,
        interestRate, setInterestRate,
        userId, setUserId,
        userName, setUserName,
        createdAt, setCreatedAt,
        updatedAt, setUpdatedAt,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
