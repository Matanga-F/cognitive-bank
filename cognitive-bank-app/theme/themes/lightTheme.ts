import { Dimensions, Platform} from 'react-native';
const { width, height } = Dimensions.get('window');

export const lightTheme = {
  mode: 'light' as const,
  
  // Brand Identity
  brand: {
    primary: 'rgba(147, 51, 234, 1)',
    secondary: 'rgba(126, 34, 206, 1)',
    tertiary: 'rgba(168, 85, 247, 1)',
    neural: 'rgba(147, 51, 234, 1)',
    accent: 'rgba(37, 99, 235, 1)',
  },

  // Background Colors
  background: {
    primary: 'rgba(250, 250, 255, 1)',
    secondary: 'rgba(255, 255, 255, 1)',
    tertiary: 'rgba(249, 250, 251, 1)',
    card: 'rgba(255, 255, 255, 0.95)',
    cardElevated: 'rgba(255, 255, 255, 1)',
    overlay: 'rgba(0, 0, 0, 0.4)',
    modal: 'rgba(255, 255, 255, 0.98)',
    sidebar: 'rgba(250, 250, 255, 1)',
    header: 'rgba(147, 51, 234, 0.95)',
    gradientStart: 'rgba(250, 250, 255, 1)',
    gradientEnd: 'rgba(233, 213, 255, 0.8)',
  },
  contentWrapper: {
    alignItems: "center",
    width: "100%",
    height: "100vh",
    paddingHorizontal: 20,
  },

  // Text Colors
  text: {
    primary: 'rgba(17, 24, 39, 0.95)',
    secondary: 'rgba(55, 65, 81, 0.85)',
    tertiary: 'rgba(107, 114, 128, 0.7)',
    accent: 'rgba(147, 51, 234, 1)',
    inverse: 'rgba(255, 255, 255, 0.95)',
    placeholder: 'rgba(156, 163, 175, 0.6)',
    disabled: 'rgba(156, 163, 175, 0.5)',
    heading: 'rgba(17, 24, 39, 0.98)',
    subheading: 'rgba(55, 65, 81, 0.9)',
  },

  // Interactive Elements
  interactive: {
    primary: {
      background: 'rgba(147, 51, 234, 1)',
      text: 'rgba(255, 255, 255, 0.95)',
      hover: 'rgba(126, 34, 206, 1)',
      active: 'rgba(107, 33, 168, 1)',
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
    success: 'rgba(22, 163, 74, 1)',
    warning: 'rgba(234, 88, 12, 1)',
    error: 'rgba(220, 38, 38, 1)',
    info: 'rgba(37, 99, 235, 1)',
  },

  // Financial Colors
  financial: {
    positive: 'rgba(22, 163, 74, 1)',
    negative: 'rgba(220, 38, 38, 1)',
    neutral: 'rgba(107, 114, 128, 1)',
  },

  // Neural Elements
  neural: {
    primary: 'rgba(147, 51, 234, 1)',
    secondary: 'rgba(168, 85, 247, 1)',
    glow: 'rgba(147, 51, 234, 0.2)',
  },

  // Charts
  charts: {
    line: 'rgba(147, 51, 234, 1)',
    area: 'rgba(147, 51, 234, 0.1)',
    bar1: 'rgba(147, 51, 234, 1)',
    bar2: 'rgba(126, 34, 206, 1)',
    bar3: 'rgba(107, 33, 168, 1)',
  },

  // Gradients
  gradients: {
    primary: ['#FAF5FF', '#FFFFFF', '#F3F4F6'],
    accent: ['#E9D5FF', '#DDD6FE', '#C4B5FD'],
    neural: ['#E9D5FF', '#DDD6FE', '#DBEAFE'],
  },

  // UI Elements
  ui: {
    border: {
      primary: 'rgba(209, 213, 219, 0.6)',
      secondary: 'rgba(229, 231, 235, 0.8)',
      accent: 'rgba(147, 51, 234, 0.4)',
      focus: 'rgba(147, 51, 234, 0.6)',
    },
    divider: 'rgba(229, 231, 235, 1)',
    shadow: {
      light: 'rgba(0, 0, 0, 0.05)',
      medium: 'rgba(0, 0, 0, 0.1)',
      heavy: 'rgba(0, 0, 0, 0.15)',
    },
  },

  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",

    ...(Platform.OS === "web"
      ? { boxShadow: "0px 8px 18px rgba(221, 208, 208, 0.25)" }
      : {
          shadowColor: "#000",
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 8,
        }),
  },

  logoText: {
    fontSize: 44,
    fontWeight: "900",
    color: "#fff",
    letterSpacing: 1,
  },

  title: {
    marginTop: 28,
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  subtitle: {
    marginTop: 10,
    fontSize: 15,
    opacity: 0.85,
    textAlign: "center",
    maxWidth: 260,
    lineHeight: 20,
  },

  footer: {
    position: "absolute",
    bottom: 26,
    width: "100%",
    alignItems: "center",
  },

  footerText: {
    fontSize: 12,
    opacity: 0.75,
    letterSpacing: 0.3,
  },

  version: {
    fontSize: 11,
    marginTop: 4,
    opacity: 0.55,
  },
};