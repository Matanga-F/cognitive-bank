import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';
import { useTheme, ThemeProvider} from "./theme/ThemeProvider"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from './navigation/AppNavigator';
const MainApp = () => {
  const { theme, toggleTheme, mode } = useTheme();

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Animated.View style={[styles.container, { backgroundColor: theme.brand.secondary}]}>
        <View style={styles.innerContainer}>
          <AppNavigator />
        </View>
      </Animated.View>
    </SafeAreaProvider>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
