export const Constants = {
  // UI Constants
  UI: {
    ANIMATION_DURATION: 300,
    DEBOUNCE_DELAY: 500,
    TOAST_DURATION: 4000,
    MAX_INPUT_LENGTH: 255,
  },
  
  // Financial Constants
  FINANCE: {
    MAX_TRANSFER_AMOUNT: 100000,
    MIN_TRANSFER_AMOUNT: 1,
    TRANSACTION_LIMIT_DAILY: 50000,
    CURRENCY: 'USD',
    DECIMAL_PLACES: 2,
  },
  
  // Storage Keys
  STORAGE_KEYS: {
    AUTH_TOKEN: '@CognitiveBank:authToken',
    USER_DATA: '@CognitiveBank:userData',
    THEME_PREFERENCE: '@CognitiveBank:theme',
    BIOMETRIC_ENABLED: '@CognitiveBank:biometricEnabled',
    RECENT_TRANSACTIONS: '@CognitiveBank:recentTransactions',
    ACCOUNTS_CACHE: '@CognitiveBank:accountsCache',
  },
  
  // Regex Patterns
  PATTERNS: {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^\+?[\d\s\-\(\)]{10,}$/,
    ACCOUNT_NUMBER: /^\d{8,12}$/,
    ROUTING_NUMBER: /^\d{9}$/,
    ZIP_CODE: /^\d{5}(-\d{4})?$/,
  },
} as const;