import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COGNITIVE_CONSTANTS = {
  // Animation durations
  animations: {
    fast: 150,
    medium: 300,
    slow: 500,
    neuralPulse: 2000,
  },

  // Border radii
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    round: 9999,
  },

  // Spacing scale
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  // Typography scale
  typography: {
    display: width > 768 ? 32 : 24,
    heading1: width > 768 ? 24 : 20,
    heading2: width > 768 ? 20 : 18,
    heading3: width > 768 ? 18 : 16,
    body: width > 768 ? 16 : 14,
    caption: width > 768 ? 14 : 12,
    tiny: width > 768 ? 12 : 10,
  },

  // Component sizing
  components: {
    button: {
      height: 48,
      smallHeight: 36,
      borderRadius: 12,
    },
    input: {
      height: 52,
      borderRadius: 12,
    },
    card: {
      borderRadius: 16,
      padding: 16,
    },
    avatar: {
      size: 40,
      sizeLg: 56,
    },
  },

  // Layout
  layout: {
    maxWidth: 800,
    screenPadding: width > 768 ? 32 : 16,
  },
} as const;