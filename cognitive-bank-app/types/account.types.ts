import { Transaction } from './transaction.types';

export type AccountType = 
  | 'CHECKING' 
  | 'SAVINGS' 
  | 'CREDIT_CARD' 
  | 'LOAN' 
  | 'INVESTMENT' 
  | 'BUSINESS';

export type AccountStatus = 
  | 'ACTIVE' 
  | 'INACTIVE' 
  | 'PENDING' 
  | 'FROZEN' 
  | 'CLOSED';

export interface Account {
  id: string;
  accountNumber: string;
  routingNumber: string;
  name: string;
  type: AccountType;
  status: AccountStatus;
  balance: number;
  availableBalance: number;
  currency: string;
  interestRate?: number;
  overdraftLimit?: number;
  creditLimit?: number;
  lastFourDigits: string;
  isPrimary: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AccountSummary {
  totalBalance: number;
  availableBalance: number;
  accounts: Account[];
  pendingTransactions: number;
  recentActivity: Transaction[]; // Now this works!
}

export interface BalanceHistory {
  date: string;
  balance: number;
  change: number;
}