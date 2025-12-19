import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export const lightTheme = {

  brand: {
    primary: "rgba(249, 115, 22, 1)",
    secondary: "rgba(234, 88, 12, 1)",
    tertiary: "rgba(251, 146, 60, 1)",
    neural: "rgba(249, 115, 22, 1)",
    accent: "rgba(2, 6, 23, 1)",
  },

  background: {
    primary: "rgba(255, 247, 237, 1)",
    secondary: "rgba(255, 255, 255, 1)",
    tertiary: "rgba(254, 215, 170, 0.25)",
    card: "rgba(255, 255, 255, 0.95)",
    cardElevated: "rgba(255, 255, 255, 1)",
    overlay: "rgba(2, 6, 23, 0.4)",
    modal: "rgba(255, 255, 255, 0.98)",
    sidebar: "rgba(255, 247, 237, 1)",
    header: "rgba(249, 115, 22, 0.95)",
    gradientStart: "rgba(255, 247, 237, 1)",
    gradientEnd: "rgba(254, 215, 170, 0.85)",
  },

  contentWrapper: {
    alignItems: "center",
    width: "100%",
    height: "100vh",
    paddingHorizontal: 20,
  },

  text: {
    primary: "rgba(2, 6, 23, 0.95)",
    secondary: "rgba(30, 41, 59, 0.85)",
    tertiary: "rgba(71, 85, 105, 0.7)",
    accent: "rgba(249, 115, 22, 1)",
    inverse: "rgba(255, 255, 255, 0.95)",
    placeholder: "rgba(148, 163, 184, 0.6)",
    disabled: "rgba(148, 163, 184, 0.5)",
    heading: "rgba(2, 6, 23, 0.98)",
    subheading: "rgba(30, 41, 59, 0.9)",
  },

  interactive: {
    primary: {
      background: "rgba(249, 115, 22, 1)",
      text: "rgba(255, 255, 255, 0.95)",
      hover: "rgba(234, 88, 12, 1)",
      active: "rgba(194, 65, 12, 1)",
    },
    secondary: {
      background: "rgba(2, 6, 23, 1)",
      text: "rgba(255, 255, 255, 0.95)",
      hover: "rgba(15, 23, 42, 1)",
      active: "rgba(30, 41, 59, 1)",
    },
  },

  status: {
    success: "rgba(22, 163, 74, 1)",
    warning: "rgba(249, 115, 22, 1)",
    error: "rgba(220, 38, 38, 1)",
    info: "rgba(37, 99, 235, 1)",
  },

  charts: {
    line: "rgba(249, 115, 22, 1)",
    area: "rgba(249, 115, 22, 0.12)",
    bar1: "rgba(249, 115, 22, 1)",
    bar2: "rgba(234, 88, 12, 1)",
    bar3: "rgba(194, 65, 12, 1)",
  },

  gradients: {
    primary: ["#FFF7ED", "#FFFFFF", "#FED7AA"],
    accent: ["#FDBA74", "#FB923C", "#F97316"],
    neural: ["#FED7AA", "#FDBA74", "#FB923C"],
  },
};
