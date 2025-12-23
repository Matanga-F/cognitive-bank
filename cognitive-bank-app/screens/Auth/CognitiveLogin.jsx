// screens/Auth/LoginScreen.jsx
import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import MainContainer from "../../features/system/containers/MainContainer";
import CognitiveInput from "../../components/common/CognitiveInput";
import CognitiveButton from "../../components/common/CognitiveButton";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AppContext} from "../../contexts/AppContext";
export default function CognitiveLogin({ navigation }) {
  const { theme } = useTheme();
  const {email, setEmail,password, setPassword } = useContext(AppContext)
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(slideUpAnim, {
        toValue: 0,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleLogin = async () => {
    // Validate inputs
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Placeholder — replace with actual auth logic later
      if (email && password) {
        Alert.alert("Success", "Login successful!");
        navigation.replace("CognitiveDashboard"); // or your main tab navigator
      } else {
        Alert.alert("Error", "Invalid credentials");
      }
    } catch (error) {
      Alert.alert("Error", "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBiometric = () => {
    Alert.alert("Biometric Auth", "Face ID / Touch ID coming soon");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleSignUp = () => {
    navigation.navigate("CognitiveRegister");
  };

  return (
    <MainContainer>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0)"]}
        style={styles.gradientBackground}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Animated.View
              style={[
                styles.content,
                {
                  opacity: fadeAnim,
                  transform: [{ translateY: slideUpAnim }],
                },
              ]}
            >
              {/* Header */}
              <View style={styles.headerContainer}>
                <Text style={[styles.headerTitle, theme.ui.title]}>
                  Cognitive Bank
                </Text>
                <Text style={[styles.headerSubtitle, { color: theme.text.secondary }]}>
                  Welcome back to your intelligent banking
                </Text>
              </View>

              {/* Glassmorphic Login Card */}
              <View style={styles.loginCard}>
                
                {/* Email Input */}
                <CognitiveInput
                  label="Email Address"
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    if (emailError) validateEmail(text);
                  }}
                  onBlur={() => validateEmail(email)}
                  iconName="mail-outline"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  variant="filled"
                  size="small"
                  error={emailError}
                  required={true}
                  style={styles.inputSpacing}
                />

                {/* Password Input */}
                <CognitiveInput
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    if (passwordError) validatePassword(text);
                  }}
                  onBlur={() => validatePassword(password)}
                  iconName="lock-closed-outline"
                  secureTextEntry={true}
                  showPasswordToggle={true}
                  variant="filled"
                  size="small"
                  error={passwordError}
                  required={true}
                  style={styles.inputSpacing}
                />

                {/* Forgot Password */}
                <TouchableOpacity
                  onPress={handleForgotPassword}
                  style={styles.forgotLink}
                >
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Login Button */}
                <CognitiveButton
                  buttonText={isLoading ? "Signing In..." : "Secure Login"}
                  handlePress={handleLogin}
                  loading={isLoading}
                  disabled={isLoading}
                  size="small"
                  fullWidth={true}
                  iconName="right-arrow"
                  iconPosition="right"
                  style={styles.loginButton}
                  gradientColors={["#FF6600", "#FF9933", "#FFAA33"]}
                />

                {/* Divider */}
                <View style={styles.dividerContainer}>
                  <View style={styles.divider} />
                  <Text style={styles.dividerText}>OR</Text>
                  <View style={styles.divider} />
                </View>

                {/* Biometric Option */}
                <TouchableOpacity
                  style={styles.biometricButton}
                  onPress={handleBiometric}
                >
                  <Ionicons name="finger-print-outline" size={28} color="#FFAA33" />
                  <Text style={styles.biometricText}>Use Biometric Login</Text>
                </TouchableOpacity>
              </View>

              {/* Sign Up Link */}
              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                  New to Cognitive Bank?{" "}
                </Text>
                <TouchableOpacity onPress={handleSignUp}>
                  <Text style={styles.signupLink}>Create Account</Text>
                </TouchableOpacity>
              </View>

              {/* Footer */}
              <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                  By signing in, you agree to our{" "}
                  <Text style={styles.footerLink}>Terms</Text> and{" "}
                  <Text style={styles.footerLink}>Privacy Policy</Text>
                </Text>
              </View>
            </Animated.View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </MainContainer>
  );
}

import { Animated, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  content: {
    padding: 24,
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },


  logo: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "800",
    color: "#FF9933",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.8,
    maxWidth: 280,
    lineHeight: 22,
  },
  loginCard: {
  width: "60%",
//   maxWidth: 720,
  backgroundColor: "rgba(30, 20, 10, 0.4)",
  
  // Top left/right corners rounded, bottom left/right corners rounded
  // But no radius on vertical sides
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  borderBottomLeftRadius: 28,
  borderBottomRightRadius: 28,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: "rgba(255, 136, 0, 0.3)",
  
  padding: 32,
  marginBottom: 32,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 10,
  elevation: 8,
},
  cardTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 24,
    textAlign: "center",
  },
  inputSpacing: {
    marginBottom: 20,
  },
  forgotLink: {
    alignSelf: "flex-end",
    marginBottom: 24,
    marginTop: 8,
  },
  forgotText: {
    color: "#FFAA33",
    fontSize: 15,
    fontWeight: "600",
  },
  loginButton: {
    marginBottom: 4,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 153, 51, 0.3)",
  },
  dividerText: {
    color: "#FFAA33",
    marginHorizontal: 16,
    fontSize: 14,
    fontWeight: "600",
  },
  biometricButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    backgroundColor: "rgba(255, 170, 51, 0.1)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 170, 51, 0.2)",
  },
  biometricText: {
    color: "#FFAA33",
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "600",
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  signupText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 15,
  },
  signupLink: {
    color: "#FF9933",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 4,
  },
  footerContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  footerText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
  },
  footerLink: {
    color: "#FFAA33",
    fontWeight: "600",
  },
});