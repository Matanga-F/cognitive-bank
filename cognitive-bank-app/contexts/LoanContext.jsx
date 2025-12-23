import React, { createContext, useState } from "react";

export const LoanContext = createContext(null);

export const LoanProvider = ({ children }) => {
  // Loan details
  const [loanId, setLoanId] = useState(null);
  const [loanNumber, setLoanNumber] = useState(null);
  const [loanType, setLoanType] = useState(null);           // PERSONAL, MORTGAGE, AUTO, etc.
  const [loanStatus, setLoanStatus] = useState(null);       // ACTIVE, CLOSED, DEFAULTED

  // Financials
  const [principalAmount, setPrincipalAmount] = useState(null);
  const [interestRate, setInterestRate] = useState(null);
  const [termMonths, setTermMonths] = useState(null);
  const [remainingTermMonths, setRemainingTermMonths] = useState(null);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [remainingBalance, setRemainingBalance] = useState(null);
  const [totalInterestPaid, setTotalInterestPaid] = useState(null);
  const [totalAmountPaid, setTotalAmountPaid] = useState(null);

  //Dates
  const [nextPaymentDate, setNextPaymentDate] = useState(null);
  const [maturityDate, setMaturityDate] = useState(null);
  const [disbursementDate, setDisbursementDate] = useState(null);

  //User linkage
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [accountId, setAccountId] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);

  // Extra info
  const [purpose, setPurpose] = useState(null);
  const [collateralDescription, setCollateralDescription] = useState(null);

  // Audit fields
  const [createdAt, setCreatedAt] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(null);

  return (
    <LoanContext.Provider
      value={{
        loanId, setLoanId,
        loanNumber, setLoanNumber,
        loanType, setLoanType,
        loanStatus, setLoanStatus,
        principalAmount, setPrincipalAmount,
        interestRate, setInterestRate,
        termMonths, setTermMonths,
        remainingTermMonths, setRemainingTermMonths,
        monthlyPayment, setMonthlyPayment,
        remainingBalance, setRemainingBalance,
        totalInterestPaid, setTotalInterestPaid,
        totalAmountPaid, setTotalAmountPaid,
        nextPaymentDate, setNextPaymentDate,
        maturityDate, setMaturityDate,
        disbursementDate, setDisbursementDate,
        userId, setUserId,
        userName, setUserName,
        accountId, setAccountId,
        accountNumber, setAccountNumber,
        purpose, setPurpose,
        collateralDescription, setCollateralDescription,
        createdAt, setCreatedAt,
        updatedAt, setUpdatedAt,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};
