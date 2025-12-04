import { Platform, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');


export const lightTheme = {
  // Background CTolors
  background: {
    primary: 'rgba(250, 245, 255, 1)',     // Very light purple
    secondary: 'rgba(255, 255, 255, 1)',   // Pure white
    tertiary: 'rgba(243, 244, 246, 1)',    // Light gray
    card: 'rgba(255, 255, 255, 0.9)',      // Semi-transparent white
    overlay: 'rgba(255, 255, 255, 0.8)',   // Light overlay
    gradient1: 'rgba(233, 213, 255, 0.6)', // Light purple
    gradient2: 'rgba(251, 207, 232, 0.4)', // Light pink
    gradient3: 'rgba(219, 234, 254, 0.3)', // Light blue
  },

  // Text Colors
  text: {
    primary: 'rgba(17, 24, 39, 0.95)',     // Near black
    secondary: 'rgba(55, 65, 81, 0.8)',    // Dark gray
    tertiary: 'rgba(107, 114, 128, 0.6)',  // Medium gray
    accent: 'rgba(147, 51, 234, 1)',       // Purple accent
    disabled: 'rgba(156, 163, 175, 0.5)',  // Disabled gray
  },

  // UI Elements
  ui: {
    border: 'rgba(147, 51, 234, 0.2)',     // Light purple border
    divider: 'rgba(147, 51, 234, 0.1)',    // Very subtle divider
    shadow: 'rgba(147, 51, 234, 0.15)',    // Light purple shadow
    input: 'rgba(255, 255, 255, 1)',       // White input
    inputBorder: 'rgba(209, 213, 219, 0.6)', // Gray input border
  },

  // Interactive Elements
  interactive: {
    primary: 'rgba(147, 51, 234, 1)',      // Purple button
    primaryHover: 'rgba(126, 34, 206, 1)', // Darker purple hover
    secondary: 'rgba(236, 72, 153, 1)',    // Pink button
    secondaryHover: 'rgba(219, 39, 119, 1)', // Darker pink hover
    disabled: 'rgba(209, 213, 219, 0.5)',  // Disabled state
  },

  // Status Colors
  status: {
    success: 'rgba(22, 163, 74, 1)',       // Green
    warning: 'rgba(234, 88, 12, 1)',       // Orange
    error: 'rgba(220, 38, 38, 1)',         // Red
    info: 'rgba(37, 99, 235, 1)',          // Blue
  },

  // Neural/Glow Effects
  neural: {
    primary: 'rgba(147, 51, 234, 1)',      // Purple
    secondary: 'rgba(168, 85, 247, 1)',    // Lighter purple
    tertiary: 'rgba(236, 72, 153, 1)',     // Pink
    accent: 'rgba(37, 99, 235, 1)',        // Blue
    highlight: 'rgba(34, 197, 94, 1)',     // Green
    glow: 'rgba(147, 51, 234, 0.4)',       // Light purple glow
  },

  // Gradients
  gradients: {
    background: ['#FAF5FF', '#FFFFFF', '#F3F4F6'],
    primary: ['#E9D5FF', '#DDD6FE', '#C4B5FD'],
    accent: ['#F3E8FF', '#FBCFE8', '#FCE7F3'],
    neural: ['#E9D5FF', '#DDD6FE', '#DBEAFE'],
  },
  container: {
  primary: 'rgba(250, 250, 255, 1)',        // Main container (matches background.primary)
  secondary: 'rgba(255, 255, 255, 1)',      // Secondary container (matches background.secondary)
  tertiary: 'rgba(249, 250, 251, 1)',       // Tertiary container (matches background.tertiary)
  elevated: 'rgba(255, 255, 255, 0.95)',    // Elevated container (matches background.card)
  glass: 'rgba(255, 255, 255, 0.85)',       // Glass morphism effect
},

innerContainer: {
  primary: 'rgba(255, 255, 255, 1)',        // One level deeper
  secondary: 'rgba(249, 250, 251, 1)',      // Two levels deeper
  accent: 'rgba(249, 240, 255, 1)',         // Accent inner container (light purple tint)
  bordered: 'rgba(255, 255, 255, 0.95)',    // With border emphasis
},

innermostContainer: {
  primary: 'rgba(249, 250, 251, 1)',        // Deepest level
  secondary: 'rgba(243, 244, 246, 1)',      // Alternative deepest
  highlight: 'rgba(243, 232, 255, 1)',      // Highlighted innermost (light purple)
  subtle: 'rgba(255, 255, 255, 0.8)',       // Subtle innermost
},

};