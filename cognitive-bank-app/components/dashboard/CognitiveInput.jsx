import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity 
} from 'react-native';
import { useTheme } from "../../theme/ThemeProvider";
import Icon from 'react-native-vector-icons/MaterialIcons'; // You'll need to install this

const CognitiveInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secure = false,
  keyboardType = "default",
  iconName,
  error,
  touched,
  onBlur,
  autoCapitalize = "none",
  returnKeyType = "done",
  onSubmitEditing,
  editable = true,
  maxLength,
  multiline = false,
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(!secure);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.wrapper}>
      {/* Label and Error */}
      <View style={styles.labelContainer}>
        {label && (
          <Text style={[styles.label, { color: theme.text.secondary }]}>
            {label}
          </Text>
        )}
        {touched && error && (
          <Text style={styles.errorText}>{error}</Text>
        )}
      </View>

      {/* Input Container */}
      <View style={[
        styles.inputContainer,
        {
          borderColor: error && touched 
            ? theme.error 
            : isFocused
            ? theme.brand.primary
            : theme.border,
          backgroundColor: editable ? theme.background : theme.surface,
        },
        touched && error && styles.inputError,
      ]}>
        {/* Left Icon */}
        {iconName && (
          <Icon
            name={iconName}
            size={20}
            color={error && touched ? theme.error : theme.text.secondary}
            style={styles.leftIcon}
          />
        )}

        {/* Input */}
        <TextInput
          style={[
            styles.input,
            {
              color: theme.text.primary,
              paddingLeft: iconName ? 40 : 16,
              paddingRight: secure ? 50 : 16,
            },
            !editable && styles.disabledInput,
          ]}
          placeholder={placeholder}
          placeholderTextColor={theme.text.placeholder}
          secureTextEntry={secure && !showPassword}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            if (onBlur) onBlur();
          }}
          autoCapitalize={autoCapitalize}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
          maxLength={maxLength}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
        />

        {/* Password Toggle Icon */}
        {secure && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.passwordToggle}
          >
            <Icon
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={20}
              color={theme.text.secondary}
            />
          </TouchableOpacity>
        )}
      </View>
      
      {/* Character Counter */}
      {maxLength && (
        <Text style={[styles.charCounter, { color: theme.text.secondary }]}>
          {value.length}/{maxLength}
        </Text>
      )}
    </View>
  );
};

export default CognitiveInput;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  errorText: {
    fontSize: 12,
    color: '#FF3B30',
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    position: 'relative',
  },
  inputError: {
    borderWidth: 2,
  },
  leftIcon: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    minHeight: 48,
  },
  disabledInput: {
    opacity: 0.6,
  },
  passwordToggle: {
    position: 'absolute',
    right: 12,
    padding: 4,
  },
  charCounter: {
    fontSize: 11,
    textAlign: 'right',
    marginTop: 4,
  },
});