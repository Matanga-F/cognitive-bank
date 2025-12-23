import React, { createContext, useState } from "react";

export const CardsContext = createContext(null);

export const CardsProvider = ({ children }) => {
  //Card details
  const [cardId, setCardId] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);          // e.g. **** **** **** 1234
  const [cardType, setCardType] = useState(null);              // DEBIT, CREDIT, VIRTUAL
  const [cardStatus, setCardStatus] = useState(null);          // ACTIVE, INACTIVE, BLOCKED
  const [cardHolderName, setCardHolderName] = useState(null);

  //Limits
  const [creditLimit, setCreditLimit] = useState(null);
  const [dailyLimit, setDailyLimit] = useState(null);

  //Linkage
  const [accountId, setAccountId] = useState(null);
  const [userId, setUserId] = useState(null);

  // Audit fields
  const [createdAt, setCreatedAt] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(null);

  return (
    <CardsContext.Provider
      value={{
        cardId, setCardId,
        cardNumber, setCardNumber,
        cardType, setCardType,
        cardStatus, setCardStatus,
        cardHolderName, setCardHolderName,
        creditLimit, setCreditLimit,
        dailyLimit, setDailyLimit,
        accountId, setAccountId,
        userId, setUserId,
        createdAt, setCreatedAt,
        updatedAt, setUpdatedAt,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
