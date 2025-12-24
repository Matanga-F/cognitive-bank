// components/common/CognitiveInput.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CognitiveInput = ({
  label = '',
  placeholder = '',
  value = '',
  onChangeText,
  iconName,
  secureTextEntry = false,
  showPasswordToggle = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  error = '',
  helperText = '',
  style = {},
  onBlur,
  onFocus,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const hasError = !!error;
  const borderColor = hasError
    ? '#FF3B30'
    : isFocused
    ? '#FF6600'
    : '#FF9933';

  const backgroundColor = hasError
    ? 'rgba(255, 59, 48, 0.08)'
    : 'rgba(255, 153, 51, 0.1)';

  const iconColor = hasError
    ? '#FF3B30'
    : isFocused
    ? '#FF6600'
    : '#FF9933';

  return (
    <View style={[styles.wrapper, style]}>
      {/* Label */}
      {label ? (
        <Text style={[styles.label, hasError && styles.errorText]}>
          {label}
        </Text>
      ) : null}

      {/* Input Container */}
      <View style={[styles.container, { borderColor, backgroundColor }]}>
        {/* Left Icon */}
        {iconName && (
          <Ionicons
            name={iconName}
            size={20}
            color={iconColor}
            style={styles.icon}
          />
        )}

        {/* Text Input */}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => {
            setIsFocused(true);
            onFocus?.();
          }}
          onBlur={() => {
            setIsFocused(false);
            onBlur?.();
          }}
        />

        {/* Password Toggle */}
        {showPasswordToggle && secureTextEntry && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.toggle}
          >
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#FF9933"
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error or Helper Text */}
      {(error || helperText) && (
        <Text style={[styles.helperText, hasError && styles.errorText]}>
          {error || helperText}
        </Text>
      )}
    </View>
  );
};

export default CognitiveInput;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    backgroundColor: 'rgba(255, 153, 51, 0.1)',
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    paddingVertical: 0,
  },
  toggle: {
    padding: 8,
  },
  helperText: {
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 6,
    marginLeft: 4,
  },
  errorText: {
    color: '#FF3B30',
  },
});