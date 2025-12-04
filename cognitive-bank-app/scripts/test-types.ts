// Test that all types are properly defined and exported
import { 
  Account, 
  Transaction, 
  User,
  AccountSummary,
  TransferRequest,
  ApiResponse
} from '../types';

// Test Account type
const testAccount: Account = {
  id: 'acc_123456',
  accountNumber: '1234567890',
  routingNumber: '021000021',
  name: 'Primary Checking',
  type: 'CHECKING',
  status: 'ACTIVE',
  balance: 1250.75,
  availableBalance: 1200.50,
  currency: 'USD',
  interestRate: 0.01,
  lastFourDigits: '7890',
  isPrimary: true,
  createdAt: '2024-01-01T10:00:00Z',
  updatedAt: '2024-01-01T10:00:00Z'
};

// Test Transaction type
const testTransaction: Transaction = {
  id: 'txn_789012',
  transactionId: 'TXN123456789',
  accountId: 'acc_123456',
  type: 'PURCHASE',
  status: 'COMPLETED',
  amount: -49.99,
  currency: 'USD',
  description: 'Coffee Shop Purchase',
  merchant: {
    name: 'Starbucks',
    category: 'Food & Drink',
    location: 'New York, NY'
  },
  category: {
    id: 'cat_food',
    name: 'Food & Dining',
    icon: 'coffee',
    color: '#FF6B6B'
  },
  date: '2024-01-15T14:30:00Z',
  postedDate: '2024-01-16T09:00:00Z',
  runningBalance: 1200.51,
  location: {
    latitude: 40.7128,
    longitude: -74.0060,
    address: '123 Broadway',
    city: 'New York',
    country: 'USA'
  },
  notes: 'Morning coffee',
  isRecurring: false,
  tags: ['coffee', 'personal']
};

// Test User type
const testUser: User = {
  id: 'usr_123',
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phoneNumber: '+1234567890',
  dateOfBirth: '1990-01-01',
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA'
  },
  isEmailVerified: true,
  isPhoneVerified: true,
  mfaEnabled: true,
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
};

// Test AccountSummary type (uses Transaction type)
const testAccountSummary: AccountSummary = {
  totalBalance: 1250.75,
  availableBalance: 1200.50,
  accounts: [testAccount],
  pendingTransactions: 2,
  recentActivity: [testTransaction]
};

// Test TransferRequest type
const testTransfer: TransferRequest = {
  fromAccountId: 'acc_123456',
  toAccountId: 'acc_789012',
  amount: 100.00,
  description: 'Monthly rent payment',
  scheduledDate: '2024-02-01T00:00:00Z'
};

// Test ApiResponse type
const testApiResponse: ApiResponse<User> = {
  success: true,
  data: testUser,
  message: 'User data retrieved successfully',
  timestamp: new Date().toISOString()
};

// // Test Routes are properly typed
// const loginRoute: typeof Routes.AUTH.LOGIN = 'Login';
// const dashboardRoute: typeof Routes.MAIN.DASHBOARD = 'Dashboard';

// Log to console (won't run, just for type checking)
console.log('All types are properly defined!');
console.log('Account:', testAccount.name);
console.log('Transaction:', testTransaction.description);
console.log('User:', testUser.email);
console.log('Transfer Amount:', testTransfer.amount);
// console.log('Login Route:', loginRoute);
// console.log('Dashboard Route:', dashboardRoute);

// Export nothing to avoid "unused variable" warnings
export {};