// screens/Auth/CognitiveRegister.jsx
import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import MainContainer from "../../features/system/containers/MainContainer";
import CognitiveInput from "../../components/common/CognitiveInput";
import CognitiveButton from "../../components/common/CognitiveButton";
import CognitiveHeader from "../../components/Card/CognitiveHeader";
import CognitiveSubHeading from "../../components/common/CognitiveSubHeading"
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AppContext } from "../../contexts/AppContext";

export default function CognitiveRegister({ navigation }) {
  const { theme } = useTheme();
  const { email, setEmail, password, setPassword } = useContext(AppContext);

  // Local state for registration-specific fields
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Error states
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

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

  // Validation functions (unchanged but cleaned)
  const validateFullName = (name) => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().split(" ").length < 2) return "Please enter your full name";
    return "";
  };

  const validateEmail = (emailVal) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) return "Email is required";
    if (!emailRegex.test(emailVal)) return "Please enter a valid email";
    return "";
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[\s-]/g, "");
    const phoneRegex = /^[+]?[\d]{10,}$/;
    if (!phone) return "Phone number is required";
    if (!phoneRegex.test(cleaned)) return "Please enter a valid phone number";
    return "";
  };

  const validatePassword = (pwd) => {
    if (!pwd) return "Password is required";
    if (pwd.length < 8) return "Password must be at least 8 characters";
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(pwd))
      return "Include uppercase, lowercase & numbers";
    return "";
  };

  const validateConfirmPassword = (confirm) => {
    if (!confirm) return "Please confirm your password";
    if (confirm !== password) return "Passwords do not match";
    return "";
  };

  const validateStepOne = () => {
    const nameErr = validateFullName(fullName);
    const emailErr = validateEmail(email);
    const phoneErr = validatePhone(phoneNumber);

    setFullNameError(nameErr);
    setEmailError(emailErr);
    setPhoneError(phoneErr);

    return !nameErr && !emailErr && !phoneErr;
  };

  const validateStepTwo = () => {
    const pwdErr = validatePassword(password);
    const confirmErr = validateConfirmPassword(confirmPassword);

    setPasswordError(pwdErr);
    setConfirmPasswordError(confirmErr);

    if (!acceptTerms) {
      setTermsError("You must accept the terms and conditions");
      return false;
    }
    setTermsError("");
    return !pwdErr && !confirmErr;
  };

  const handleNextStep = () => {
    if (validateStepOne()) {
      setStep(2);
    }
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleRegister = async () => {
    if (!validateStepTwo()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In real app: call your registration API here
      // await authService.register({ fullName, email, phoneNumber, password });

      Alert.alert(
        "Success!",
        "Account created successfully.",
        [
          {
            text: "Continue",
            onPress: () => navigation.replace("CognitiveDashboard"),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      Alert.alert(
        "Registration Failed",
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = () => {
    navigation.navigate("CognitiveLogin");
  };

  return (
    <MainContainer>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.4)", "transparent"]}
        style={styles.gradientBackground}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
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
                <CognitiveHeader
                  heading="Create Account"
                />
                <CognitiveSubHeading  text="Join Cognitive Bank for intelligent banking"/>
              </View>

              {/* Progress Indicator */}
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: step === 1 ? "50%" : "100%" },
                    ]}
                  />
                </View>

                <View style={styles.stepIndicator}>
                  <View style={[styles.stepCircle, step >= 1 && styles.activeStep]}>
                    <Text style={[styles.stepText, step >= 1 && styles.activeStepText]}>1</Text>
                  </View>
                  <View style={styles.stepLine} />
                  <View style={[styles.stepCircle, step >= 2 && styles.activeStep]}>
                    <Text style={[styles.stepText, step >= 2 && styles.activeStepText]}>2</Text>
                  </View>
                </View>

                <View style={styles.stepLabels}>
                  <Text style={styles.stepLabel}>Personal Info</Text>
                  <Text style={styles.stepLabel}>Security</Text>
                </View>
              </View>

              {/* Registration Form Card */}
              <View style={styles.registerCard}>
                {step === 1 ? (
                  <>
                    <CognitiveInput
                      label="Full Name"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChangeText={setFullName}
                      onBlur={() => setFullNameError(validateFullName(fullName))}
                      iconName="person-outline"
                      autoCapitalize="words"
                      error={fullNameError}
                      required
                      style={styles.inputSpacing}
                    />

                    <CognitiveInput
                      label="Email Address"
                      placeholder="Enter your email"
                      value={email}
                      onChangeText={setEmail}
                      onBlur={() => setEmailError(validateEmail(email))}
                      iconName="mail-outline"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      error={emailError}
                      style={styles.inputSpacing}
                    />

                    <CognitiveInput
                      label="Phone Number"
                      placeholder="e.g. +1234567890"
                      value={phoneNumber}
                      onChangeText={setPhoneNumber}
                      onBlur={() => setPhoneError(validatePhone(phoneNumber))}
                      iconName="call-outline"
                      keyboardType="phone-pad"
                      error={phoneError}
                      required
                      style={styles.inputSpacing}
                    />

                    <CognitiveButton
                      buttonText="Continue"
                      handlePress={handleNextStep}
                      fullWidth
                      iconName="arrow-forward"
                      iconPosition="right"
                      gradientColors={["#FF6600", "#FF9933", "#FFAA33"]}
                    />
                  </>
                ) : (
                  <>
                    <CognitiveInput
                      label="Password"
                      placeholder="Create a strong password"
                      value={password}
                      onChangeText={setPassword}
                      onBlur={() => setPasswordError(validatePassword(password))}
                      iconName="lock-closed-outline"
                      secureTextEntry
                      showPasswordToggle
                      error={passwordError}
                      helperText="Min. 8 chars: uppercase, lowercase, number"
                      required
                      style={styles.inputSpacing}
                    />

                    <CognitiveInput
                      label="Confirm Password"
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      onBlur={() => setConfirmPasswordError(validateConfirmPassword(confirmPassword))}
                      iconName="lock-closed-outline"
                      secureTextEntry
                      showPasswordToggle
                      error={confirmPasswordError}
                      required
                      style={styles.inputSpacing}
                    />

                    <TouchableOpacity
                      style={styles.termsContainer}
                      onPress={() => setAcceptTerms(!acceptTerms)}
                    >
                      <View style={[styles.checkbox, acceptTerms && styles.checkboxChecked]}>
                        {acceptTerms && <Ionicons name="checkmark" size={16} color="#FFF" />}
                      </View>
                      <Text style={styles.termsText}>
                        I agree to the <Text style={styles.termsLink}>Terms of Service</Text> and{" "}
                        <Text style={styles.termsLink}>Privacy Policy</Text>
                      </Text>
                    </TouchableOpacity>

                    {termsError ? <Text style={styles.errorText}>{termsError}</Text> : null}

                    <View style={styles.buttonRow}>
                      <CognitiveButton
                        buttonText="Back"
                        handlePress={handlePreviousStep}
                        variant="outline"
                        style={{ flex: 1 }}
                        iconName="arrow-back"
                        iconPosition="left"
                      />
                      <CognitiveButton
                        buttonText={isLoading ? "Creating..." : "Create Account"}
                        handlePress={handleRegister}
                        loading={isLoading}
                        disabled={isLoading}
                        style={{ flex: 2 }}
                        gradientColors={["#FF6600", "#FF9933", "#FFAA33"]}
                        iconName="person-add"
                        iconPosition="right"
                      />
                    </View>
                  </>
                )}
              </View>

              {/* Sign In Link */}
              <View style={styles.signinContainer}>
                <Text style={styles.signinText}>Already have an account? </Text>
                <TouchableOpacity onPress={handleSignIn}>
                  <Text style={styles.signinLink}>Sign In</Text>
                </TouchableOpacity>
              </View>

              {/* Security Badge */}
              <View style={styles.securityFeatures}>
                <Ionicons name="shield-checkmark-outline" size={20} color="#4CAF50" />
                <Text style={styles.securityText}>
                  Bank-level security with 256-bit encryption
                </Text>
              </View>
            </Animated.View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </MainContainer>
  );
}

// Updated styles for better responsiveness and clarity
const styles = StyleSheet.create({
  gradientBackground: { flex: 1 },
  keyboardView: { flex: 1 },
  scrollContent: { flexGrow: 1, justifyContent: "center", paddingVertical: 40 },
  content: { padding: 24, alignItems: "center" },
  headerContainer: { alignItems: "center", marginBottom: 32 },
  headerTitle: { fontSize: 32, fontWeight: "800", color: "#FF9933", marginBottom: 8 },
  headerSubtitle: { fontSize: 16, textAlign: "center", opacity: 0.8 },

  progressContainer: { width: "100%", maxWidth: 400, marginBottom: 32, alignItems: "center" },
  progressBar: { height: 6, width: "80%", backgroundColor: "rgba(255,153,51,0.3)", borderRadius: 3, overflow: "hidden" },
  progressFill: { height: "100%", backgroundColor: "#FF9933" },

  stepIndicator: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 16 },
  stepCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: "rgba(255,153,51,0.3)", justifyContent: "center", alignItems: "center" },
  activeStep: { backgroundColor: "#FF9933" },
  stepText: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
  activeStepText: { color: "#000" },
  stepLine: { width: 80, height: 3, backgroundColor: "rgba(255,153,51,0.5)", marginHorizontal: 8 },

  stepLabels: { flexDirection: "row", justifyContent: "space-between", width: "80%" },
  stepLabel: { color: "#FFAA33", fontSize: 13, fontWeight: "600" },

  registerCard: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "rgba(30, 20, 10, 0.5)",
    borderRadius: 28,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(255, 136, 0, 0.4)",
    padding: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  inputSpacing: { marginBottom: 20 },

  termsContainer: { flexDirection: "row", alignItems: "flex-start", marginVertical: 16 },
  checkbox: { width: 24, height: 24, borderRadius: 6, borderWidth: 2, borderColor: "#FF9933", marginRight: 12, justifyContent: "center", alignItems: "center" },
  checkboxChecked: { backgroundColor: "#FF9933" },
  termsText: { color: "rgba(255,255,255,0.8)", fontSize: 14, flex: 1, lineHeight: 20 },
  termsLink: { color: "#FFAA33", fontWeight: "700" },
  errorText: { color: "#FF3B30", fontSize: 13, marginLeft: 36, marginBottom: 12 },

  buttonRow: { flexDirection: "row", gap: 16, marginTop: 8 },
  signinContainer: { flexDirection: "row", marginTop: 24 },
  signinText: { color: "rgba(255,255,255,0.8)", fontSize: 15 },
  signinLink: { color: "#FF9933", fontWeight: "700", fontSize: 15 },

  securityFeatures: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(76,175,80,0.15)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(76,175,80,0.4)",
    marginTop: 24,
  },
  securityText: { color: "#4CAF50", fontWeight: "600", marginLeft: 10 },
});