import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const darkTheme = {
  mode: 'dark' as const,
  
  // Brand Identity
  brand: {
    primary: 'rgba(88, 28, 135, 1)',
    secondary: 'rgba(59, 7, 100, 1)',
    tertiary: 'rgba(147, 51, 234, 1)',
    neural: 'rgba(232, 121, 249, 1)',
    accent: 'rgba(37, 99, 235, 1)',
  },

  // Background Colors
  background: {
    primary: 'rgba(17, 24, 39, 1)',
    secondary: 'rgba(31, 41, 55, 1)',
    tertiary: 'rgba(55, 65, 81, 1)',
    card: 'rgba(88, 28, 135, 0.25)',
    cardElevated: 'rgba(88, 28, 135, 0.4)',
    overlay: 'rgba(17, 24, 39, 0.85)',
    modal: 'rgba(31, 41, 55, 0.95)',
    sidebar: 'rgba(15, 23, 42, 1)',
    header: 'rgba(88, 28, 135, 0.9)',
    gradientStart: 'rgba(17, 24, 39, 1)',
    gradientEnd: 'rgba(88, 28, 135, 0.8)',
  },

  // Text Colors
  text: {
    primary: 'rgba(255, 255, 255, 0.95)',
    secondary: 'rgba(243, 244, 246, 0.85)',
    tertiary: 'rgba(209, 213, 219, 0.7)',
    accent: 'rgba(232, 121, 249, 1)',
    inverse: 'rgba(17, 24, 39, 0.95)',
    placeholder: 'rgba(156, 163, 175, 0.5)',
    disabled: 'rgba(156, 163, 175, 0.4)',
    heading: 'rgba(255, 255, 255, 0.98)',
    subheading: 'rgba(243, 244, 246, 0.9)',
  },

  // Interactive Elements
  interactive: {
    primary: {
      background: 'rgba(168, 85, 247, 1)',
      text: 'rgba(255, 255, 255, 0.95)',
      hover: 'rgba(147, 51, 234, 1)',
      active: 'rgba(126, 34, 206, 1)',
    },
    secondary: {
      background: 'rgba(236, 72, 153, 1)',
      text: 'rgba(255, 255, 255, 0.95)',
      hover: 'rgba(219, 39, 119, 1)',
      active: 'rgba(190, 24, 93, 1)',
    },
  },

  // Status Colors
  status: {
    success: 'rgba(34, 197, 94, 1)',
    warning: 'rgba(251, 146, 60, 1)',
    error: 'rgba(239, 68, 68, 1)',
    info: 'rgba(59, 130, 246, 1)',
  },

  // Financial Colors
  financial: {
    positive: 'rgba(34, 197, 94, 1)',
    negative: 'rgba(239, 68, 68, 1)',
    neutral: 'rgba(156, 163, 175, 1)',
  },

  // Neural Elements
  neural: {
    primary: 'rgba(232, 121, 249, 1)',
    secondary: 'rgba(168, 85, 247, 1)',
    glow: 'rgba(232, 121, 249, 0.3)',
  },

  // Charts
  charts: {
    line: 'rgba(232, 121, 249, 1)',
    area: 'rgba(232, 121, 249, 0.2)',
    bar1: 'rgba(168, 85, 247, 1)',
    bar2: 'rgba(147, 51, 234, 1)',
    bar3: 'rgba(126, 34, 206, 1)',
  },

  // Gradients
  gradients: {
    primary: ['#581C87', '#3B0764', '#1F2937'],
    accent: ['#E879F9', '#EC4899', '#D946EF'],
    neural: ['#D946EF', '#9333EA', '#3B82F6'],
  },

  // UI Elements
  ui: {
    border: {
      primary: 'rgba(147, 51, 234, 0.3)',
      secondary: 'rgba(168, 85, 247, 0.2)',
      accent: 'rgba(232, 121, 249, 0.4)',
      focus: 'rgba(232, 121, 249, 0.7)',
    },
    divider: 'rgba(147, 51, 234, 0.15)',
    shadow: {
      light: 'rgba(147, 51, 234, 0.2)',
      medium: 'rgba(147, 51, 234, 0.3)',
      heavy: 'rgba(147, 51, 234, 0.4)',
    },
  },
};