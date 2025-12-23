import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const CognitiveButton = ({
  buttonText,
  handlePress,
  status,
  iconName,
  disabled = false,
  loading = false,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost'
  size = 'medium', // 'small', 'medium', 'large'
  fullWidth = false,
  iconPosition = 'right', // 'left' or 'right'
  style = {},
  textStyle = {},
  gradientColors = ["#FF6600", "#FF9933", "#FFAA33"],
}) => {
  
  // Define button variants
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButton;
      case 'outline':
        return styles.outlineButton;
      case 'ghost':
        return styles.ghostButton;
      default:
        return {};
    }
  };

  // Define text variants
  const getTextStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButtonText;
      case 'outline':
        return styles.outlineButtonText;
      case 'ghost':
        return styles.ghostButtonText;
      default:
        return styles.primaryButtonText;
    }
  };

  // Define button sizes
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.smallButton;
      case 'large':
        return styles.largeButton;
      default:
        return styles.mediumButton;
    }
  };

  // If variant is outline or ghost, don't use gradient
  const renderButtonContent = () => (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={[
        styles.buttonBase,
        getButtonStyle(),
        getSizeStyle(),
        fullWidth && styles.fullWidth,
        disabled && styles.disabledButton,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : '#FF6600'} />
      ) : (
        <>
          {iconName && iconPosition === 'left' && (
            <Ionicons 
              name={iconName} 
              size={size === 'small' ? 16 : size === 'large' ? 24 : 20} 
              color={getIconColor()} 
              style={[styles.buttonIcon, iconPosition === 'left' && styles.iconLeft]} 
            />
          )}
          
          <Text style={[
            getTextStyle(),
            disabled && styles.disabledText,
            textStyle,
          ]}>
            {buttonText}
          </Text>
          
          {iconName && iconPosition === 'right' && (
            <Ionicons 
              name={iconName} 
              size={size === 'small' ? 16 : size === 'large' ? 24 : 20} 
              color={getIconColor()} 
              style={[styles.buttonIcon, iconPosition === 'right' && styles.iconRight]} 
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );

  const getIconColor = () => {
    switch (variant) {
      case 'primary':
        return '#FFFFFF';
      case 'secondary':
        return '#FF6600';
      case 'outline':
        return '#FF6600';
      case 'ghost':
        return '#FF6600';
      default:
        return '#FFFFFF';
    }
  };

  // For primary variant, wrap with gradient
  if (variant === 'primary') {
    return (
      <LinearGradient
        colors={disabled ? ["#CCCCCC", "#DDDDDD", "#EEEEEE"] : gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.gradientWrapper,
          getSizeStyle(),
          fullWidth && styles.fullWidth,
          style,
        ]}
      >
        {renderButtonContent()}
      </LinearGradient>
    );
  }

  // For other variants, return regular button
  return renderButtonContent();
};

export default CognitiveButton;

const styles = StyleSheet.create({
  gradientWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonBase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingHorizontal: 20,
  },
  mediumButton: {
    paddingVertical: 14,
    minHeight: 50,
  },
  smallButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    minHeight: 20,
  },
  largeButton: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    minHeight: 60,
  },
  fullWidth: {
    width: '100%',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FF6600',
  },
  secondaryButtonText: {
    color: '#FF6600',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF6600',
  },
  outlineButtonText: {
    color: '#FF6600',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  ghostButtonText: {
    color: '#FF6600',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.6,
  },
  disabledText: {
    opacity: 0.7,
  },
  buttonIcon: {
    marginHorizontal: 8,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});