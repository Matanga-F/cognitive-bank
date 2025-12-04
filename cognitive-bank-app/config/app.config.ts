export const AppConfig = {
  name: 'Cognitive Bank',
  version: '1.0.0',
  buildNumber: '1',
  environment: process.env.NODE_ENV || 'development',
  supportEmail: 'support@cognitivebank.com',
  supportPhone: '+1-800-BANK-APP',
  
  // API Configuration
  api: {
    baseURL: process.env.API_BASE_URL || 'https://api.cognitivebank.com/v1',
    timeout: 30000,
    retryAttempts: 3,
  },
  
  // Feature Flags
  features: {
    biometricAuth: true,
    voiceCommands: false,
    aiAssistance: true,
    darkMode: true,
    offlineMode: true,
  },
  
  // Security Settings
  security: {
    sessionTimeout: 15 * 60 * 1000, // 15 minutes
    maxLoginAttempts: 5,
    passwordMinLength: 8,
    encryptionLevel: 'AES-256-GCM' as const,
  },
  
  // Compliance
  compliance: {
    gdprCompliant: true,
    pciCompliant: true,
    dataRetentionDays: 365 * 7, // 7 years
  },
} as const;