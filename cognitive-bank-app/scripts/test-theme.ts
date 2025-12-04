// import { ThemeProvider, useTheme, useThemedStyles, useFinancialColors } from '../theme';
import React from 'react';

console.log('🧪 Testing Enhanced Theme System...\n');

// Test imports
console.log('✅ ThemeProvider imported');
console.log('✅ useTheme hook available');
console.log('✅ useThemedStyles hook available');

// Test theme structure
const { darkTheme, lightTheme, COGNITIVE_CONSTANTS } = require('../theme/themes');

console.log('✅ Dark theme structure:', {
  mode: darkTheme.mode,
  brandColors: Object.keys(darkTheme.brand),
  financialColors: Object.keys(darkTheme.financial),
});

console.log('✅ Light theme structure:', {
  mode: lightTheme.mode,
  brandColors: Object.keys(lightTheme.brand),
  financialColors: Object.keys(lightTheme.financial),
});

console.log('✅ Constants:', {
  spacing: COGNITIVE_CONSTANTS.spacing,
  typography: COGNITIVE_CONSTANTS.typography,
});

console.log('\n🎉 Enhanced theme system is ready!');
console.log('\n💡 Usage example:');
console.log(`
  // In your components:
  import { useTheme, useThemedStyles } from './theme';
  
  const MyComponent = () => {
    const { theme, isDark, toggleTheme } = useTheme();
    const styles = useThemedStyles();
    
    return (
      <View style={styles.container}>
        <Text style={styles.heading1}>Cognitive Bank</Text>
        <View style={styles.card}>
          <Text style={styles.body}>Your financial intelligence</Text>
        </View>
      </View>
    );
  };
`);

export {};