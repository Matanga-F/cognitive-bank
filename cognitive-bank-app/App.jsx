import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';
import { useTheme, ThemeProvider} from "./theme/ThemeProvider"
import { SafeAreaView } from "react-native-safe-area-context";
const MainApp = () => {
  const { theme, toggleTheme, mode } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View style={[styles.container, { backgroundColor: theme.background.primary }]}>
        <View style={styles.innerContainer}>

          {/* Toggle Theme Button */}
          <Button
            title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            onPress={toggleTheme}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
