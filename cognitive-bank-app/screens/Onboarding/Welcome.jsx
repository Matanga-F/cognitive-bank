// screens/Onboarding/WelcomeScreen.jsx (or wherever it's located)
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Platform,
} from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import MainContainer from "../../features/system/containers/MainContainer";
import CognitiveFooter from "../../components/Card/CognitiveFooter";
import CognitiveNavList from "../../components/common/CognitiveNavList"
import CognitiveHeader from "../../components/Card/CognitiveHeader";
export default function WelcomeScreen({ navigation }) {
  const { theme } = useTheme();

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const slideUpAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    // Elegant entrance: fade in, gentle scale, and subtle slide up
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 10,
        tension: 50,
        useNativeDriver: true,
      }),
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto-navigate to Login after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace("CognitiveLogin");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <MainContainer>
      {/* Centered Content with Animation */}
      <Animated.View
        style={[
          styles.contentContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }, { translateY: slideUpAnim }],
          },
        ]}
      >
        {/* Premium Logo Circle */}
        <View style={[styles.logoCircle, theme.ui.logoCircle || {}]}>
          <Text style={[styles.logoText, theme.ui.logoText || {}]}>
            CIB
          </Text>
        </View>

        {/* Title */}
        <Text style={[styles.title, theme.ui.title || {}, { color: theme.text.heading || "#FF9933" }]}>
          Cognitive Bank
        </Text>

        {/* Subtitle */}
        <Text style={[styles.subtitle, theme.ui.subtitle || {}, { color: theme.text.secondary }]}>
          Intelligent Banking • Secure Future
        </Text>
      </Animated.View>

      {/* Footer - Elegantly positioned at bottom */}
      <View style={styles.footerWrapper}>
        <CognitiveFooter 
          support="Cognitive" 
          organization="Intellince" 
        />
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  logoCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "rgba(204, 85, 0, 0.9)", // Deep orange fallback
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 153, 51, 0.4)",
    // Shadows already handled in theme.ui.logoCircle
  },
  logoText: {
    fontSize: 48,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: 2,
  },
  title: {
    marginTop: 32,
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    maxWidth: 300,
    opacity: 0.9,
    letterSpacing: 0.3,
  },
  footerWrapper: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});