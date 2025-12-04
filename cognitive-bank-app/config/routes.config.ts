export const Routes = {
  // Auth Routes
  AUTH: {
    LOGIN: 'Login',
    REGISTER: 'Register',
    FORGOT_PASSWORD: 'ForgotPassword',
    VERIFY_OTP: 'VerifyOTP',
    BIOMETRIC_SETUP: 'BiometricSetup',
  },
  
  // Main App Routes
  MAIN: {
    DASHBOARD: 'Dashboard',
    ACCOUNTS: 'Accounts',
    TRANSACTIONS: 'Transactions',
    TRANSFER: 'Transfer',
    PAYMENTS: 'Payments',
    INVESTMENTS: 'Investments',
    CARDS: 'Cards',
    SUPPORT: 'Support',
    SETTINGS: 'Settings',
    PROFILE: 'Profile',
  },
  
  // Modal/Overlay Routes
  MODALS: {
    TRANSACTION_DETAILS: 'TransactionDetails',
    ACCOUNT_DETAILS: 'AccountDetails',
    CONFIRM_TRANSACTION: 'ConfirmTransaction',
    SECURITY_VERIFICATION: 'SecurityVerification',
  },
} as const;