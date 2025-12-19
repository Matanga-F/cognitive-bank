import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export const darkTheme = {
  // Brand Identity
  brand: {
    primary: "rgba(249, 115, 22, 1)",     // Deep Orange
    secondary: "rgba(124, 45, 18, 1)",    // Burnt Orange
    tertiary: "rgba(194, 65, 12, 1)",
    neural: "rgba(253, 186, 116, 1)",
    accent: "rgba(0, 0, 0, 1)",
  },

  // Background Colors
  background: {
    primary: "rgba(2, 6, 23, 1)",          // Deep Black
    secondary: "rgba(15, 23, 42, 1)",
    tertiary: "rgba(30, 41, 59, 1)",
    card: "rgba(249, 115, 22, 0.18)",
    cardElevated: "rgba(249, 115, 22, 0.32)",
    overlay: "rgba(2, 6, 23, 0.88)",
    modal: "rgba(15, 23, 42, 0.96)",
    sidebar: "rgba(2, 6, 23, 1)",
    header: "rgba(124, 45, 18, 0.95)",
    gradientStart: "rgba(2, 6, 23, 1)",
    gradientEnd: "rgba(124, 45, 18, 0.85)",
  },

  contentWrapper: {
    alignItems: "center",
    width: "100%",
    height: "100vh",
    paddingHorizontal: 20,
  },

  // Text Colors
  text: {
    primary: "rgba(255, 255, 255, 0.95)",
    secondary: "rgba(241, 245, 249, 0.85)",
    tertiary: "rgba(203, 213, 225, 0.7)",
    accent: "rgba(249, 115, 22, 1)",
    inverse: "rgba(2, 6, 23, 0.95)",
    placeholder: "rgba(148, 163, 184, 0.5)",
    disabled: "rgba(148, 163, 184, 0.4)",
    heading: "rgba(255, 255, 255, 0.98)",
    subheading: "rgba(241, 245, 249, 0.9)",
  },

  // Interactive Elements
  interactive: {
    primary: {
      background: "rgba(249, 115, 22, 1)",
      text: "rgba(255, 255, 255, 0.95)",
      hover: "rgba(234, 88, 12, 1)",
      active: "rgba(194, 65, 12, 1)",
    },
    secondary: {
      background: "rgba(2, 6, 23, 1)",
      text: "rgba(249, 115, 22, 1)",
      hover: "rgba(15, 23, 42, 1)",
      active: "rgba(30, 41, 59, 1)",
    },
  },

  // Status Colors
  status: {
    success: "rgba(34, 197, 94, 1)",
    warning: "rgba(249, 115, 22, 1)",
    error: "rgba(239, 68, 68, 1)",
    info: "rgba(59, 130, 246, 1)",
  },

  // Financial
  financial: {
    positive: "rgba(34, 197, 94, 1)",
    negative: "rgba(239, 68, 68, 1)",
    neutral: "rgba(148, 163, 184, 1)",
  },

  // Charts
  charts: {
    line: "rgba(249, 115, 22, 1)",
    area: "rgba(249, 115, 22, 0.2)",
    bar1: "rgba(249, 115, 22, 1)",
    bar2: "rgba(234, 88, 12, 1)",
    bar3: "rgba(194, 65, 12, 1)",
  },

  gradients: {
    primary: ["#020617", "#0F172A", "#7C2D12"],
    accent: ["#FDBA74", "#FB923C", "#F97316"],
    neural: ["#FDBA74", "#FB923C", "#EA580C"],
  },

  ui: {
    border: {
      primary: "rgba(249, 115, 22, 0.35)",
      secondary: "rgba(249, 115, 22, 0.2)",
      accent: "rgba(249, 115, 22, 0.45)",
      focus: "rgba(249, 115, 22, 0.75)",
    },
    divider: "rgba(249, 115, 22, 0.15)",
    shadow: {
      light: "rgba(249, 115, 22, 0.2)",
      medium: "rgba(249, 115, 22, 0.3)",
      heavy: "rgba(249, 115, 22, 0.45)",
    },
  },
};
