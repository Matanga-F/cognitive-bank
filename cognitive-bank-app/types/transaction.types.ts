export type TransactionType = 
  | 'DEPOSIT' 
  | 'WITHDRAWAL' 
  | 'TRANSFER' 
  | 'PAYMENT' 
  | 'PURCHASE' 
  | 'REFUND' 
  | 'FEE' 
  | 'INTEREST';

export type TransactionStatus = 
  | 'PENDING' 
  | 'COMPLETED' 
  | 'FAILED' 
  | 'CANCELLED' 
  | 'REVERSED';

export interface Transaction {
  id: string;
  transactionId: string;
  accountId: string;
  type: TransactionType;
  status: TransactionStatus;
  amount: number;
  currency: string;
  description: string;
  merchant?: Merchant;
  category: TransactionCategory;
  date: string;
  postedDate?: string;
  runningBalance?: number;
  location?: TransactionLocation;
  notes?: string;
  isRecurring: boolean;
  tags: string[];
}

export interface Merchant {
  name: string;
  category: string;
  logo?: string;
  location?: string;
}

export interface TransactionCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface TransactionLocation {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  country?: string;
}

export interface TransferRequest {
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  description: string;
  scheduledDate?: string;
  recurring?: RecurringTransfer;
}

export interface RecurringTransfer {
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
  endDate?: string;
}