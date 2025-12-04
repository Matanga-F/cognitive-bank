import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { ThemeType } from './ThemeProvider';

// Type for style creation
export type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

// Create themed stylesheet
export const createThemedStyleSheet = <T extends NamedStyles<T>>(
  styles: (theme: ThemeType, constants: typeof COGNITIVE_CONSTANTS) => T
) => {
  return styles;
};

// Common themed styles
export const commonStyles = createThemedStyleSheet((theme, constants) => ({
  // Layout
  container: {
    flex: 1,
    backgroundColor: theme.background.primary,
  },
  screen: {
    flex: 1,
    backgroundColor: theme.background.primary,
    padding: constants.spacing.md,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Cards
  card: {
    backgroundColor: theme.background.card,
    borderRadius: constants.components.card.borderRadius,
    padding: constants.components.card.padding,
    marginVertical: constants.spacing.sm,
    shadowColor: theme.ui.shadow.medium,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: theme.ui.border.primary,
  },
  cardElevated: {
    backgroundColor: theme.background.cardElevated,
    borderRadius: constants.components.card.borderRadius,
    padding: constants.components.card.padding,
    marginVertical: constants.spacing.sm,
    shadowColor: theme.ui.shadow.heavy,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: theme.ui.border.accent,
  },

  // Typography
  heading1: {
    fontSize: constants.typography.heading1,
    fontWeight: '700' as const,
    color: theme.text.heading,
    lineHeight: constants.typography.heading1 * 1.2,
  },
  heading2: {
    fontSize: constants.typography.heading2,
    fontWeight: '600' as const,
    color: theme.text.heading,
    lineHeight: constants.typography.heading2 * 1.2,
  },
  heading3: {
    fontSize: constants.typography.heading3,
    fontWeight: '600' as const,
    color: theme.text.heading,
    lineHeight: constants.typography.heading3 * 1.2,
  },
  body: {
    fontSize: constants.typography.body,
    fontWeight: '400' as const,
    color: theme.text.primary,
    lineHeight: constants.typography.body * 1.5,
  },
  caption: {
    fontSize: constants.typography.caption,
    fontWeight: '400' as const,
    color: theme.text.secondary,
    lineHeight: constants.typography.caption * 1.4,
  },

  // Buttons
  buttonPrimary: {
    backgroundColor: theme.interactive.primary.background,
    borderRadius: constants.components.button.borderRadius,
    height: constants.components.button.height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: constants.spacing.lg,
  },
  buttonPrimaryText: {
    color: theme.interactive.primary.text,
    fontSize: constants.typography.body,
    fontWeight: '600' as const,
  },
  buttonSecondary: {
    backgroundColor: theme.interactive.secondary.background,
    borderRadius: constants.components.button.borderRadius,
    height: constants.components.button.height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: constants.spacing.lg,
  },
  buttonSecondaryText: {
    color: theme.interactive.secondary.text,
    fontSize: constants.typography.body,
    fontWeight: '600' as const,
  },

  // Inputs
  input: {
    backgroundColor: theme.background.secondary,
    borderWidth: 1,
    borderColor: theme.ui.border.primary,
    borderRadius: constants.components.input.borderRadius,
    height: constants.components.input.height,
    paddingHorizontal: constants.spacing.md,
    fontSize: constants.typography.body,
    color: theme.text.primary,
  },
  inputFocused: {
    borderColor: theme.ui.border.focus,
    backgroundColor: theme.background.tertiary,
  },

  // Dividers
  divider: {
    height: 1,
    backgroundColor: theme.ui.divider,
    marginVertical: constants.spacing.md,
  },

  // Neural effects
  neuralGlow: {
    shadowColor: theme.neural.glow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
}));

// Color utilities
export const colorUtils = {
  // Adjust opacity
  withOpacity: (color: string, opacity: number): string => {
    if (color.startsWith('rgba')) {
      const parts = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
      if (parts) {
        return `rgba(${parts[1]}, ${parts[2]}, ${parts[3]}, ${opacity})`;
      }
    } else if (color.startsWith('rgb')) {
      const parts = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (parts) {
        return `rgba(${parts[1]}, ${parts[2]}, ${parts[3]}, ${opacity})`;
      }
    } else if (color.startsWith('#')) {
      // Handle hex colors (simplified)
      return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
    }
    return color;
  },

  // Lighten/darken color (simplified)
  adjustBrightness: (color: string, percent: number): string => {
    // This is a simplified version - in production, use a proper color library
    return color; // Implement proper color manipulation
  },

  // Check if color is dark
  isDarkColor: (color: string): boolean => {
    // Simplified dark color detection
    return color.includes('rgba(17') || color.includes('rgba(31') || color.includes('rgba(55');
  },
};