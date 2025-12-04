import { useTheme } from './ThemeProvider';
import { commonStyles, colorUtils } from './utils';

// Hook for using themed styles
export const useThemedStyles = () => {
  const { theme, constants } = useTheme();
  return commonStyles(theme, constants);
};

// Hook for color utilities
export const useColorUtils = () => {
  return colorUtils;
};

// Hook for specific theme values
export const useThemeColors = () => {
  const { theme } = useTheme();
  return theme;
};

// Hook for theme constants
export const useThemeConstants = () => {
  const { constants } = useTheme();
  return constants;
};

// // Hook for financial colors
// export const useFinancialColors = () => {
//   const { theme } = useTheme();
//   return theme.financial;
// };

// // Hook for neural colors
// export const useNeuralColors = () => {
//   const { theme } = useTheme();
//   return theme.neural;
// };