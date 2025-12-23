import React, { createContext, useState } from "react";

export const TransactionsContext = createContext(null);

export const TransactionsProvider = ({ children }) => {
  //Core transaction details
  const [transactionId, setTransactionId] = useState(null);
  const [transactionReference, setTransactionReference] = useState(null);
  const [transactionType, setTransactionType] = useState(null);     // DEPOSIT, WITHDRAWAL, TRANSFER, PAYMENT
  const [transactionStatus, setTransactionStatus] = useState(null); // PENDING, COMPLETED, FAILED

  //Financials
  const [amount, setAmount] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [description, setDescription] = useState(null);

  //Merchant info
  const [merchantName, setMerchantName] = useState(null);
  const [merchantCategory, setMerchantCategory] = useState(null);

  // Account linkage
  const [fromAccountId, setFromAccountId] = useState(null);
  const [fromAccountNumber, setFromAccountNumber] = useState(null);
  const [toAccountId, setToAccountId] = useState(null);
  const [toAccountNumber, setToAccountNumber] = useState(null);

  // Card linkage
  const [cardId, setCardId] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);

  //Balances
  const [balanceAfter, setBalanceAfter] = useState(null);
  const [availableBalanceAfter, setAvailableBalanceAfter] = useState(null);

  // Dates
  const [transactionDate, setTransactionDate] = useState(null);
  const [postedDate, setPostedDate] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);

  return (
    <TransactionsContext.Provider
      value={{
        transactionId, setTransactionId,
        transactionReference, setTransactionReference,
        transactionType, setTransactionType,
        transactionStatus, setTransactionStatus,
        amount, setAmount,
        currency, setCurrency,
        description, setDescription,
        merchantName, setMerchantName,
        merchantCategory, setMerchantCategory,
        fromAccountId, setFromAccountId,
        fromAccountNumber, setFromAccountNumber,
        toAccountId, setToAccountId,
        toAccountNumber, setToAccountNumber,
        cardId, setCardId,
        cardNumber, setCardNumber,
        balanceAfter, setBalanceAfter,
        availableBalanceAfter, setAvailableBalanceAfter,
        transactionDate, setTransactionDate,
        postedDate, setPostedDate,
        createdAt, setCreatedAt,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
