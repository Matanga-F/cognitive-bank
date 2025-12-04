import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Platform,
} from "react-native";
import { useTheme } from "../../theme/ThemeProvider"
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen({ navigation }) {
  const { theme } = useTheme();

  // Animations
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Smooth fade + scale
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 800,
        useNativeDriver: Platform.OS !== "web",
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: Platform.OS !== "web",
      }),
    ]).start();

    // Auto navigate
    const timer = setTimeout(() => navigation.replace("Login"), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.brand.primary }]}>
      <Animated.View
        style={[
          styles.center,
          {
            opacity: fade,
            transform: [{ scale }],
          },
        ]}
      >
        {/* LOGO */}
        <View style={[styles.logoCircle, { backgroundColor: theme.brand.secondary }]}>
          <Text style={styles.logoText}>CB</Text>
        </View>

        {/* TITLE */}
        <Text style={[styles.title, { color: theme.text.primary }]}>
          Cognitive Bank
        </Text>

        {/* SUBTITLE */}
        <Text style={[styles.subtitle, { color: theme.text.secondary }]}>
          Intelligent Banking • Secure Future
        </Text>
        
      </Animated.View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: theme.text.secondary }]}>
          Powered by AI
        </Text>
        <Text style={[styles.version, { color: theme.text.secondary }]}>
          v1.0.0
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",

    // Web shadow fix
    ...(Platform.OS === "web"
      ? { boxShadow: "0px 4px 12px rgba(0,0,0,0.25)" }
      : {
          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 6,
        }),
  },
  logoText: {
    fontSize: 42,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 1,
  },
  title: {
    marginTop: 24,
    fontSize: 28,
    fontWeight: "800",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    opacity: 0.8,
    textAlign: "center",
    maxWidth: 280,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    opacity: 0.7,
  },
  version: {
    fontSize: 10,
    marginTop: 4,
    opacity: 0.5,
  },
});
