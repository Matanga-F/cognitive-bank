import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Platform,
  Easing,
  Button
} from 'react-native';
import { useEffect, useRef } from "react";
import { useTheme, ThemeProvider } from "./theme/ThemeProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator"
const MainApp = () => {
  const { theme, mode, toggleTheme } = useTheme();

  // Fade-in animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 900,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.brand.secondary }}>
        <Animated.View
          style={[
            styles.container,
            { backgroundColor: theme.brand.secondary, opacity: fadeAnim }
          ]}
        >
          {Platform.OS === "web" ? (
            <View>
              <AppNavigator />
              </View>
                ) : (
                  <Text style={theme.text.secondary}>Running on Mobile</Text>
                )}
         
        </Animated.View>
      </SafeAreaView>
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
    
  },
});
