import { Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// Professional cognitive banking themes with neural-inspired elements
export const darkTheme = {
  // Brand Identity
  brand: {
    primary: 'rgba(88, 28, 135, 1)',        // Deep purple - Trust & Stability
    secondary: 'rgba(59, 7, 100, 1)',       // Royal purple - Security
    tertiary: 'rgba(147, 51, 234, 1)',      // Bright purple - Innovation
    neural: 'rgba(232, 121, 249, 1)',       // Neural magenta - Intelligence
    accent: 'rgba(37, 99, 235, 1)',         // Blue accent - Communication
  },

  // Background Colors - Cognitive Banking Focus
  background: {
    primary: 'rgba(17, 24, 39, 1)',         // Deep space - Main background
    secondary: 'rgba(31, 41, 55, 1)',       // Dark slate - Cards & Sections
    tertiary: 'rgba(55, 65, 81, 1)',        // Slate gray - Active elements
    card: 'rgba(88, 28, 135, 0.25)',        // Semi-transparent purple card
    cardElevated: 'rgba(88, 28, 135, 0.4)', // Elevated card
    overlay: 'rgba(17, 24, 39, 0.85)',      // Modal overlay
    modal: 'rgba(31, 41, 55, 0.95)',        // Modal background
    sidebar: 'rgba(15, 23, 42, 1)',         // Sidebar/drawer
    header: 'rgba(88, 28, 135, 0.9)',       // App header
    gradientStart: 'rgba(17, 24, 39, 1)',
    gradientEnd: 'rgba(88, 28, 135, 0.8)',
  },
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    primary: 'rgba(17, 24, 39, 1)',           // Main container (matches background.primary)
    secondary: 'rgba(31, 41, 55, 1)',         // Secondary container (matches background.secondary)
    tertiary: 'rgba(55, 65, 81, 1)',          // Tertiary container (matches background.tertiary)
    elevated: 'rgba(88, 28, 135, 0.25)',      // Elevated container (matches background.card)
    glass: 'rgba(31, 41, 55, 0.8)',           // Glass morphism effect
  },

innerContainer: {
  primary: 'rgba(31, 41, 55, 1)',           // One level deeper
  secondary: 'rgba(55, 65, 81, 1)',         // Two levels deeper
  accent: 'rgba(88, 28, 135, 0.3)',         // Accent inner container
  bordered: 'rgba(31, 41, 55, 0.9)',        // With border emphasis
},

innermostContainer: {
  primary: 'rgba(55, 65, 81, 1)',           // Deepest level
  secondary: 'rgba(75, 85, 99, 1)',         // Alternative deepest
  highlight: 'rgba(88, 28, 135, 0.35)',     // Highlighted innermost
  subtle: 'rgba(31, 41, 55, 0.7)',          // Subtle innermost
},

  // Text Colors - Optimal Readability
  text: {
    primary: 'rgba(255, 255, 255, 0.95)',   // White - Primary text
    secondary: 'rgba(243, 244, 246, 0.85)', // Light gray - Secondary text
    tertiary: 'rgba(209, 213, 219, 0.7)',   // Muted gray - Supporting text
    accent: 'rgba(232, 121, 249, 1)',       // Neural magenta - Highlights
    inverse: 'rgba(17, 24, 39, 0.95)',      // For light backgrounds
    placeholder: 'rgba(156, 163, 175, 0.5)',
    disabled: 'rgba(156, 163, 175, 0.4)',
    heading: 'rgba(255, 255, 255, 0.98)',   // Headings
    subheading: 'rgba(243, 244, 246, 0.9)',
  },

  // UI Elements - Professional Banking Interface
  ui: {
    border: {
      primary: 'rgba(147, 51, 234, 0.3)',   // Main borders
      secondary: 'rgba(168, 85, 247, 0.2)', // Subtle borders
      accent: 'rgba(232, 121, 249, 0.4)',   // Accent borders
      input: 'rgba(168, 85, 247, 0.4)',     // Input borders
      focus: 'rgba(232, 121, 249, 0.7)',    // Focus state
    },
    divider: 'rgba(147, 51, 234, 0.15)',    // Content dividers
    shadow: {
      light: 'rgba(147, 51, 234, 0.2)',
      medium: 'rgba(147, 51, 234, 0.3)',
      heavy: 'rgba(147, 51, 234, 0.4)',
      neural: 'rgba(232, 121, 249, 0.25)',
    },
    input: {
      background: 'rgba(31, 41, 55, 0.8)',
      backgroundFocused: 'rgba(88, 28, 135, 0.3)',
      placeholder: 'rgba(156, 163, 175, 0.5)',
    },
  },

  // Interactive Elements - Clear CTAs
  interactive: {
    primary: {
      background: 'rgba(168, 85, 247, 1)',      // Primary buttons
      text: 'rgba(255, 255, 255, 0.95)',
      hover: 'rgba(147, 51, 234, 1)',
      active: 'rgba(126, 34, 206, 1)',
    },
    secondary: {
      background: 'rgba(236, 72, 153, 1)',      // Secondary actions
      text: 'rgba(255, 255, 255, 0.95)',
      hover: 'rgba(219, 39, 119, 1)',
      active: 'rgba(190, 24, 93, 1)',
    },
    neural: {
      background: 'rgba(232, 121, 249, 1)',     // AI/Cognitive features
      text: 'rgba(17, 24, 39, 0.95)',
      hover: 'rgba(216, 70, 239, 1)',
      active: 'rgba(192, 38, 211, 1)',
    },
    tertiary: {
      background: 'rgba(31, 41, 55, 1)',        // Tertiary/outline buttons
      text: 'rgba(243, 244, 246, 0.9)',
      border: 'rgba(147, 51, 234, 0.3)',
      hover: 'rgba(55, 65, 81, 1)',
    },
    disabled: {
      background: 'rgba(75, 85, 99, 0.5)',
      text: 'rgba(156, 163, 175, 0.6)',
    },
  },

  // Status Colors - Financial Indicators
  status: {
    success: {
      primary: 'rgba(34, 197, 94, 1)',       // Profits, gains, positive
      light: 'rgba(34, 197, 94, 0.15)',
      text: 'rgba(34, 197, 94, 0.9)',
    },
    warning: {
      primary: 'rgba(251, 146, 60, 1)',      // Warnings, medium risk
      light: 'rgba(251, 146, 60, 0.15)',
      text: 'rgba(251, 146, 60, 0.9)',
    },
    error: {
      primary: 'rgba(239, 68, 68, 1)',       // Errors, losses, alerts
      light: 'rgba(239, 68, 68, 0.15)',
      text: 'rgba(239, 68, 68, 0.9)',
    },
    info: {
      primary: 'rgba(59, 130, 246, 1)',      // Information, notifications
      light: 'rgba(59, 130, 246, 0.15)',
      text: 'rgba(59, 130, 246, 0.9)',
    },
  },

  // Financial Status Specific
  financial: {
    positive: 'rgba(34, 197, 94, 1)',        // Green for gains
    negative: 'rgba(239, 68, 68, 1)',        // Red for losses
    neutral: 'rgba(156, 163, 175, 1)',       // Gray for neutral
    highRisk: 'rgba(251, 146, 60, 1)',       // Orange for high risk
    lowRisk: 'rgba(59, 130, 246, 1)',        // Blue for low risk
    investment: 'rgba(168, 85, 247, 1)',     // Purple for investments
    savings: 'rgba(34, 197, 94, 1)',         // Green for savings
    credit: 'rgba(236, 72, 153, 1)',         // Pink for credit
  },

  // Neural/Cognitive Elements - AI Banking Features
  neural: {
    primary: 'rgba(232, 121, 249, 1)',       // Main neural color
    secondary: 'rgba(168, 85, 247, 1)',      // Secondary neural
    tertiary: 'rgba(236, 72, 153, 1)',       // Tertiary neural
    accent: 'rgba(59, 130, 246, 1)',         // Blue neural accent
    synapse: 'rgba(134, 239, 172, 0.8)',     // Synapse connections
    node: 'rgba(249, 168, 212, 0.8)',        // Neural nodes
    pulse: 'rgba(232, 121, 249, 0.6)',       // Pulsing effects
    glow: {
      light: 'rgba(232, 121, 249, 0.3)',
      medium: 'rgba(232, 121, 249, 0.5)',
      strong: 'rgba(232, 121, 249, 0.7)',
    },
    gradientStart: 'rgba(232, 121, 249, 0.8)',
    gradientEnd: 'rgba(168, 85, 247, 0.8)',
  },

  // Chart & Data Visualization
  charts: {
    line: 'rgba(232, 121, 249, 1)',         // Main line chart
    area: 'rgba(232, 121, 249, 0.2)',       // Area under curve
    bar1: 'rgba(168, 85, 247, 1)',          // Bar chart color 1
    bar2: 'rgba(147, 51, 234, 1)',          // Bar chart color 2
    bar3: 'rgba(126, 34, 206, 1)',          // Bar chart color 3
    grid: 'rgba(147, 51, 234, 0.1)',        // Chart grid lines
    axis: 'rgba(147, 51, 234, 0.4)',        // Axis lines
    tooltip: 'rgba(31, 41, 55, 0.95)',      // Tooltip background
  },

  // Gradients - Professional Banking Gradients
  gradients: {
    primary: ['#581C87', '#3B0764', '#1F2937'],      // Main gradient
    accent: ['#E879F9', '#EC4899', '#D946EF'],       // Accent gradient
    neural: ['#D946EF', '#9333EA', '#3B82F6'],       // Neural gradient
    card: ['rgba(88, 28, 135, 0.8)', 'rgba(88, 28, 135, 0.4)'],
    button: ['#A855F7', '#9333EA'],
    success: ['#10B981', '#059669'],
    warning: ['#F59E0B', '#D97706'],
    error: ['#EF4444', '#DC2626'],
  },

  // Elevation Shadows (for iOS/Android)
  elevation: {
    1: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    2: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 2,
    },
    4: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 4,
    },
    8: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
};

export const lightTheme = {
  // Brand Identity
  brand: {
    primary: 'rgba(147, 51, 234, 1)',        // Bright purple - Trust & Innovation
    secondary: 'rgba(126, 34, 206, 1)',      // Deep purple - Security
    tertiary: 'rgba(168, 85, 247, 1)',       // Light purple - Accessibility
    neural: 'rgba(147, 51, 234, 1)',         // Purple neural - Intelligence
    accent: 'rgba(37, 99, 235, 1)',          // Blue accent - Communication
  },

  // Background Colors - Clean Banking Interface
  background: {
    primary: 'rgba(250, 250, 255, 1)',       // Off-white with blue tint
    secondary: 'rgba(255, 255, 255, 1)',     // Pure white
    tertiary: 'rgba(249, 250, 251, 1)',      // Light gray background
    card: 'rgba(255, 255, 255, 0.95)',       // Card background
    cardElevated: 'rgba(255, 255, 255, 1)',  // Elevated card
    overlay: 'rgba(0, 0, 0, 0.4)',           // Overlay
    modal: 'rgba(255, 255, 255, 0.98)',      // Modal background
    sidebar: 'rgba(250, 250, 255, 1)',       // Sidebar/drawer
    header: 'rgba(147, 51, 234, 0.95)',      // App header
    gradientStart: 'rgba(250, 250, 255, 1)',
    gradientEnd: 'rgba(233, 213, 255, 0.8)',
  },

  // Text Colors - Professional Readability
  text: {
    primary: 'rgba(17, 24, 39, 0.95)',       // Near black - Primary text
    secondary: 'rgba(55, 65, 81, 0.85)',     // Dark gray - Secondary text
    tertiary: 'rgba(107, 114, 128, 0.7)',    // Medium gray - Supporting text
    accent: 'rgba(147, 51, 234, 1)',         // Purple accent - Highlights
    inverse: 'rgba(255, 255, 255, 0.95)',    // For dark backgrounds
    placeholder: 'rgba(156, 163, 175, 0.6)',
    disabled: 'rgba(156, 163, 175, 0.5)',
    heading: 'rgba(17, 24, 39, 0.98)',       // Headings
    subheading: 'rgba(55, 65, 81, 0.9)',
  },

  // UI Elements - Clean Banking Interface
  ui: {
    border: {
      primary: 'rgba(209, 213, 219, 0.6)',   // Main borders
      secondary: 'rgba(229, 231, 235, 0.8)', // Subtle borders
      accent: 'rgba(147, 51, 234, 0.4)',     // Accent borders
      input: 'rgba(209, 213, 219, 0.8)',     // Input borders
      focus: 'rgba(147, 51, 234, 0.6)',      // Focus state
    },
    divider: 'rgba(229, 231, 235, 1)',       // Content dividers
    shadow: {
      light: 'rgba(0, 0, 0, 0.05)',
      medium: 'rgba(0, 0, 0, 0.1)',
      heavy: 'rgba(0, 0, 0, 0.15)',
      neural: 'rgba(147, 51, 234, 0.15)',
    },
    input: {
      background: 'rgba(255, 255, 255, 1)',
      backgroundFocused: 'rgba(249, 250, 251, 1)',
      placeholder: 'rgba(156, 163, 175, 0.6)',
    },
  },

  // Interactive Elements
  interactive: {
    primary: {
      background: 'rgba(147, 51, 234, 1)',      // Primary buttons
      text: 'rgba(255, 255, 255, 0.95)',
      hover: 'rgba(126, 34, 206, 1)',
      active: 'rgba(107, 33, 168, 1)',
    },
    secondary: {
      background: 'rgba(236, 72, 153, 1)',      // Secondary actions
      text: 'rgba(255, 255, 255, 0.95)',
      hover: 'rgba(219, 39, 119, 1)',
      active: 'rgba(190, 24, 93, 1)',
    },
    neural: {
      background: 'rgba(147, 51, 234, 1)',      // AI/Cognitive features
      text: 'rgba(255, 255, 255, 0.95)',
      hover: 'rgba(126, 34, 206, 1)',
      active: 'rgba(107, 33, 168, 1)',
    },
    tertiary: {
      background: 'rgba(255, 255, 255, 1)',     // Tertiary/outline buttons
      text: 'rgba(17, 24, 39, 0.9)',
      border: 'rgba(209, 213, 219, 0.8)',
      hover: 'rgba(249, 250, 251, 1)',
    },
    disabled: {
      background: 'rgba(243, 244, 246, 0.8)',
      text: 'rgba(156, 163, 175, 0.6)',
    },
  },

  // Status Colors
  status: {
    success: {
      primary: 'rgba(22, 163, 74, 1)',       // Green
      light: 'rgba(22, 163, 74, 0.1)',
      text: 'rgba(22, 163, 74, 0.9)',
    },
    warning: {
      primary: 'rgba(234, 88, 12, 1)',       // Orange
      light: 'rgba(234, 88, 12, 0.1)',
      text: 'rgba(234, 88, 12, 0.9)',
    },
    error: {
      primary: 'rgba(220, 38, 38, 1)',       // Red
      light: 'rgba(220, 38, 38, 0.1)',
      text: 'rgba(220, 38, 38, 0.9)',
    },
    info: {
      primary: 'rgba(37, 99, 235, 1)',       // Blue
      light: 'rgba(37, 99, 235, 0.1)',
      text: 'rgba(37, 99, 235, 0.9)',
    },
  },

  // Financial Status Specific
  financial: {
    positive: 'rgba(22, 163, 74, 1)',        // Green for gains
    negative: 'rgba(220, 38, 38, 1)',        // Red for losses
    neutral: 'rgba(107, 114, 128, 1)',       // Gray for neutral
    highRisk: 'rgba(234, 88, 12, 1)',        // Orange for high risk
    lowRisk: 'rgba(37, 99, 235, 1)',         // Blue for low risk
    investment: 'rgba(147, 51, 234, 1)',     // Purple for investments
    savings: 'rgba(22, 163, 74, 1)',         // Green for savings
    credit: 'rgba(236, 72, 153, 1)',         // Pink for credit
  },

  // Neural/Cognitive Elements
  neural: {
    primary: 'rgba(147, 51, 234, 1)',       // Main neural color
    secondary: 'rgba(168, 85, 247, 1)',     // Secondary neural
    tertiary: 'rgba(236, 72, 153, 1)',      // Tertiary neural
    accent: 'rgba(37, 99, 235, 1)',         // Blue neural accent
    synapse: 'rgba(34, 197, 94, 0.6)',      // Synapse connections
    node: 'rgba(249, 168, 212, 0.6)',       // Neural nodes
    pulse: 'rgba(147, 51, 234, 0.4)',       // Pulsing effects
    glow: {
      light: 'rgba(147, 51, 234, 0.2)',
      medium: 'rgba(147, 51, 234, 0.3)',
      strong: 'rgba(147, 51, 234, 0.4)',
    },
    gradientStart: 'rgba(147, 51, 234, 0.8)',
    gradientEnd: 'rgba(126, 34, 206, 0.8)',
  },

  // Chart & Data Visualization
  charts: {
    line: 'rgba(147, 51, 234, 1)',         // Main line chart
    area: 'rgba(147, 51, 234, 0.1)',       // Area under curve
    bar1: 'rgba(147, 51, 234, 1)',         // Bar chart color 1
    bar2: 'rgba(126, 34, 206, 1)',         // Bar chart color 2
    bar3: 'rgba(107, 33, 168, 1)',         // Bar chart color 3
    grid: 'rgba(229, 231, 235, 1)',        // Chart grid lines
    axis: 'rgba(209, 213, 219, 0.8)',      // Axis lines
    tooltip: 'rgba(17, 24, 39, 0.95)',     // Tooltip background
  },

  // Gradients
  gradients: {
    primary: ['#FAF5FF', '#FFFFFF', '#F3F4F6'],    // Main gradient
    accent: ['#E9D5FF', '#DDD6FE', '#C4B5FD'],     // Accent gradient
    neural: ['#E9D5FF', '#DDD6FE', '#DBEAFE'],     // Neural gradient
    card: ['rgba(255, 255, 255, 1)', 'rgba(249, 250, 251, 1)'],
    button: ['#9333EA', '#7C3AED'],
    success: ['#16A34A', '#15803D'],
    warning: ['#EA580C', '#C2410C'],
    error: ['#DC2626', '#B91C1C'],
  },

  // Elevation Shadows
  elevation: {
    1: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 1.0,
      elevation: 1,
    },
    2: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2.22,
      elevation: 2,
    },
    4: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 3.84,
      elevation: 4,
    },
    8: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
};

// Cognitive Banking Theme Constants
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
    small: 8,
    medium: 12,
    large: 16,
    xlarge: 24,
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

  // Typography scale (based on screen width)
  typography: {
    title: width > 768 ? 32 : 24,
    heading: width > 768 ? 24 : 20,
    subheading: width > 768 ? 18 : 16,
    body: width > 768 ? 16 : 14,
    caption: width > 768 ? 14 : 12,
    small: width > 768 ? 12 : 10,
  },

  // Component-specific sizing
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
  },
};
