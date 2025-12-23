// contexts/ContextProvider.jsx
import React from "react";
import { AppProvider } from "./AppContext";
import { AuthProvider } from "./AuthContext";
import {AccountProvider} from "./AccountContext"
import {CardsProvider} from "./CardsContext"
import {LoanProvider} from "./LoanContext"
import {TransactionsProvider} from "./TransactionsContext"
import {LinkageProvider} from "./LinkageContext"
const ContextProvider = ({ children }) => {
  return (
    <AppProvider>
      <AuthProvider>
        <AccountProvider>
          <CardsProvider>
            <TransactionsProvider>
            <LoanProvider>
              <LinkageProvider>
                {children}
              </LinkageProvider>
              </LoanProvider>
            </TransactionsProvider>
          </CardsProvider>
        </AccountProvider>
      </AuthProvider>
    </AppProvider>
  );
};

export default ContextProvider;