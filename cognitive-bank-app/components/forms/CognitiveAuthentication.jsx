import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity, 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { useTheme } from "../../theme/ThemeProvider";
import CognitiveInput from "../common/CognitiveInput"

const CognitiveAuthentication = ({ 
  onLoginSuccess,
  onRegisterSuccess,
  initialMode = 'login' // 'login' or 'register'
}) => {
  const { theme } = useTheme();
  const [authMode, setAuthMode] = useState(initialMode);
  const [loading, setLoading] = useState(false);
  
  // Form states
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Validation states
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Toggle between login and register
  const toggleAuthMode = () => {
    setAuthMode(prev => prev === 'login' ? 'register' : 'login');
    setErrors({});
    setTouched({});
  };

  // Handle login field changes
  const handleLoginChange = (field, value) => {
    setLoginData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // Handle register field changes
  const handleRegisterChange = (field, value) => {
    setRegisterData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // Mark field as touched
  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email';
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const validateName = (name) => {
    if (!name) return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters';
    return '';
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) return 'Please confirm your password';
    if (password !== confirmPassword) return 'Passwords do not match';
    return '';
  };

  // Validate form based on mode
  const validateForm = () => {
    const newErrors = {};
    
    if (authMode === 'login') {
      const emailError = validateEmail(loginData.email);
      const passwordError = validatePassword(loginData.password);
      
      if (emailError) newErrors.email = emailError;
      if (passwordError) newErrors.password = passwordError;
    } else {
      const nameError = validateName(registerData.name);
      const emailError = validateEmail(registerData.email);
      const passwordError = validatePassword(registerData.password);
      const confirmError = validateConfirmPassword(
        registerData.password, 
        registerData.confirmPassword
      );
      
      if (nameError) newErrors.name = nameError;
      if (emailError) newErrors.email = emailError;
      if (passwordError) newErrors.password = passwordError;
      if (confirmError) newErrors.confirmPassword = confirmError;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Mark all fields as touched
    const allFields = authMode === 'login' 
      ? ['email', 'password']
      : ['name', 'email', 'password', 'confirmPassword'];
    
    const touchedFields = {};
    allFields.forEach(field => {
      touchedFields[field] = true;
    });
    setTouched(touchedFields);
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      if (authMode === 'login') {
        // Simulate API call for login
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Call success callback
        if (onLoginSuccess) {
          onLoginSuccess({
            email: loginData.email,
            // In real app, you'd get token from API response
            token: 'mock-jwt-token'
          });
        }
        
        Alert.alert('Success', 'Logged in successfully!');
        
      } else {
        // Simulate API call for registration
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Call success callback
        if (onRegisterSuccess) {
          onRegisterSuccess({
            name: registerData.name,
            email: registerData.email,
            // In real app, you'd get user data from API response
            id: 'mock-user-id'
          });
        }
        
        Alert.alert('Success', 'Account created successfully!');
        
        // Optionally switch to login mode after successful registration
        // setAuthMode('login');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // Render login form
  const renderLoginForm = () => (
    <View style={styles.formContainer}>
      <Text style={[styles.title, { color: theme.text.primary }]}>
        Welcome Back
      </Text>
      <Text style={[styles.subtitle, { color: theme.text.secondary }]}>
        Sign in to continue
      </Text>

      <CognitiveInput
        label="Email"
        placeholder="Enter your email"
        value={loginData.email}
        onChangeText={(text) => handleLoginChange('email', text)}
        keyboardType="email-address"
        onBlur={() => handleBlur('email')}
      />
      {touched.email && errors.email && (
        <Text style={styles.errorText}>{errors.email}</Text>
      )}

      <CognitiveInput
        label="Password"
        placeholder="Enter your password"
        value={loginData.password}
        onChangeText={(text) => handleLoginChange('password', text)}
        secure
        onBlur={() => handleBlur('password')}
      />
      {touched.password && errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={[styles.forgotPasswordText, { color: theme.brand.primary }]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );

  // Render register form
  const renderRegisterForm = () => (
    <View style={styles.formContainer}>
      <Text style={[styles.title, { color: theme.text.primary }]}>
        Create Account
      </Text>
      <Text style={[styles.subtitle, { color: theme.text.secondary }]}>
        Sign up to get started
      </Text>

      <CognitiveInput
        label="Full Name"
        placeholder="Enter your full name"
        value={registerData.name}
        onChangeText={(text) => handleRegisterChange('name', text)}
        onBlur={() => handleBlur('name')}
      />
      {touched.name && errors.name && (
        <Text style={styles.errorText}>{errors.name}</Text>
      )}

      <CognitiveInput
        label="Email"
        placeholder="Enter your email"
        value={registerData.email}
        onChangeText={(text) => handleRegisterChange('email', text)}
        keyboardType="email-address"
        onBlur={() => handleBlur('email')}
      />
      {touched.email && errors.email && (
        <Text style={styles.errorText}>{errors.email}</Text>
      )}

      <CognitiveInput
        label="Password"
        placeholder="Create a password"
        value={registerData.password}
        onChangeText={(text) => handleRegisterChange('password', text)}
        secure
        onBlur={() => handleBlur('password')}
      />
      {touched.password && errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      <CognitiveInput
        label="Confirm Password"
        placeholder="Confirm your password"
        value={registerData.confirmPassword}
        onChangeText={(text) => handleRegisterChange('confirmPassword', text)}
        secure
        onBlur={() => handleBlur('confirmPassword')}
      />
      {touched.confirmPassword && errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Auth Mode Toggle */}
        <View style={styles.toggleContainer}>
          <View style={[styles.toggleBackground, { backgroundColor: theme.surface }]}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                authMode === 'login' && [
                  styles.toggleButtonActive,
                  { backgroundColor: theme.brand.primary }
                ]
              ]}
              onPress={() => setAuthMode('login')}
            >
              <Text
                style={[
                  styles.toggleText,
                  authMode === 'login' && styles.toggleTextActive
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                styles.toggleButton,
                authMode === 'register' && [
                  styles.toggleButtonActive,
                  { backgroundColor: theme.brand.primary }
                ]
              ]}
              onPress={() => setAuthMode('register')}
            >
              <Text
                style={[
                  styles.toggleText,
                  authMode === 'register' && styles.toggleTextActive
                ]}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Form */}
        {authMode === 'login' ? renderLoginForm() : renderRegisterForm()}

        {/* Submit Button */}
        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: theme.brand.primary }]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.submitButtonText}>
            {loading ? 'Processing...' : authMode === 'login' ? 'Sign In' : 'Create Account'}
          </Text>
        </TouchableOpacity>

        {/* Toggle Prompt */}
        <View style={styles.togglePromptContainer}>
          <Text style={[styles.togglePrompt, { color: theme.text.secondary }]}>
            {authMode === 'login' 
              ? "Don't have an account? " 
              : "Already have an account? "}
          </Text>
          <TouchableOpacity onPress={toggleAuthMode}>
            <Text style={[styles.toggleLink, { color: theme.brand.primary }]}>
              {authMode === 'login' ? 'Sign Up' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CognitiveAuthentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  toggleContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  toggleBackground: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 4,
    width: '80%',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  toggleButtonActive: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  toggleTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  formContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '500',
  },
  submitButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  togglePromptContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  togglePrompt: {
    fontSize: 14,
  },
  toggleLink: {
    fontSize: 14,
    fontWeight: '600',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 12,
    marginLeft: 4,
  },
});