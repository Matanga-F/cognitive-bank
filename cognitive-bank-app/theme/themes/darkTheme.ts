import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

export const darkTheme = {
  mode: 'dark' as const,
  
  // Brand Identity
  brand: {
    primary: 'rgba(255, 102, 0, 1)',      // Vibrant Orange
    secondary: 'rgba(204, 85, 0, 1)',     // Deep Orange
    tertiary: 'rgba(255, 153, 51, 1)',    // Lighter Orange
    neural: 'rgba(255, 179, 71, 1)',      // Warm Orange
    accent: 'rgba(255, 204, 102, 1)',     // Soft Accent Orange
  },

  // Background Colors
  background: {
    primary: 'rgba(0, 0, 0, 1)',          // Pure Black
    secondary: 'rgba(18, 18, 18, 1)',     // Dark Gray Black
    tertiary: 'rgba(34, 34, 34, 1)',      // Slightly lighter black
    card: 'rgba(255, 102, 0, 0.25)',      // Orange tint
    cardElevated: 'rgba(255, 102, 0, 0.4)',
    overlay: 'rgba(0, 0, 0, 0.85)',
    modal: 'rgba(18, 18, 18, 0.95)',
    sidebar: 'rgba(10, 10, 10, 1)',
    header: 'rgba(255, 102, 0, 0.9)',
    gradientStart: 'rgba(0, 0, 0, 1)',
    gradientEnd: 'rgba(255, 102, 0, 0.8)',
  },
  contentWrapper: {
    alignItems: "center",
    width: "100%",
    height: "100vh",
    paddingHorizontal: 20,
  },

  // Text Colors
  text: {
    primary: 'rgba(255, 255, 255, 0.95)',
    secondary: 'rgba(243, 244, 246, 0.85)',
    tertiary: 'rgba(209, 213, 219, 0.7)',
    accent: 'rgba(255, 153, 51, 1)',
    inverse: 'rgba(0, 0, 0, 0.95)',
    placeholder: 'rgba(156, 163, 175, 0.5)',
    disabled: 'rgba(156, 163, 175, 0.4)',
    heading: 'rgba(255, 255, 255, 0.98)',
    subheading: 'rgba(243, 244, 246, 0.9)',
  },

  // Interactive Elements
  interactive: {
    primary: {
      background: 'rgba(255, 102, 0, 1)',
      text: 'rgba(255, 255, 255, 0.95)',
      hover: 'rgba(204, 85, 0, 1)',
      active: 'rgba(153, 61, 0, 1)',
    },
    secondary: {
      background: 'rgba(255, 153, 51, 1)',
      text: 'rgba(0, 0, 0, 0.95)',
      hover: 'rgba(255, 128, 0, 1)',
      active: 'rgba(204, 85, 0, 1)',
    },
  },

  // Status Colors
  status: {
    success: 'rgba(34, 197, 94, 1)',
    warning: 'rgba(255, 153, 51, 1)',
    error: 'rgba(239, 68, 68, 1)',
    info: 'rgba(255, 179, 71, 1)',
  },

  // Financial Colors
  financial: {
    positive: 'rgba(34, 197, 94, 1)',
    negative: 'rgba(239, 68, 68, 1)',
    neutral: 'rgba(156, 163, 175, 1)',
  },

  // Neural Elements
  neural: {
    primary: 'rgba(255, 153, 51, 1)',
    secondary: 'rgba(255, 179, 71, 1)',
    glow: 'rgba(255, 102, 0, 0.3)',
  },

  // Charts
  charts: {
    line: 'rgba(255, 153, 51, 1)',
    area: 'rgba(255, 153, 51, 0.2)',
    bar1: 'rgba(255, 102, 0, 1)',
    bar2: 'rgba(204, 85, 0, 1)',
    bar3: 'rgba(153, 61, 0, 1)',
  },

  // Gradients
  gradients: {
    primary: ['#FF6600', '#CC5500', '#000000'],
    accent: ['#FF9933', '#FFB347', '#FFCC66'],
    neural: ['#FF6600', '#FF9933', '#FFCC66'],
  },

  // UI Elements
  ui: {
    border: {
      primary: 'rgba(255, 102, 0, 0.3)',
      secondary: 'rgba(255, 153, 51, 0.2)',
      accent: 'rgba(255, 179, 71, 0.4)',
      focus: 'rgba(255, 153, 51, 0.7)',
    },
    divider: 'rgba(255, 102, 0, 0.15)',
    shadow: {
      light: 'rgba(255, 102, 0, 0.2)',
      medium: 'rgba(255, 102, 0, 0.3)',
      heavy: 'rgba(255, 102, 0, 0.4)',
    },

    //Un-ordered Styles::
    logoCircle: {
      width: 120,
      height: 120,
      borderRadius: 60,
      justifyContent: "center",
      alignItems: "center",

      ...(Platform.OS === "web"
        ? { boxShadow: "0px 8px 18px rgba(0,0,0,0.25)" }
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
      color: "#FF6600",
      letterSpacing: 1,
    },

    title: {
      marginTop: 28,
      fontSize: 30,
      fontWeight: "800",
      letterSpacing: 0.5,
      color: "#FF9933",
    },

    subtitle: {
      marginTop: 10,
      fontSize: 15,
      opacity: 0.85,
      textAlign: "center",
      maxWidth: 260,
      lineHeight: 20,
      color: "#FFB347",
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
      color: "#FF9933",
    },

    version: {
      fontSize: 11,
      marginTop: 4,
      opacity: 0.55,
      color: "#FF6600",
    },
  },
};
