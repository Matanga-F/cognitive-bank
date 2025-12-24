// components/common/CognitiveCard.jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';

const CognitiveCard = ({ 
  children, 
  style, 
  elevated = false,   // Optional: stronger shadow for floating feel
  noPadding = false, // Optional: remove internal padding if needed
}) => {
  return (
    <View 
      style={[
        styles.card,
        elevated && styles.elevated,
        noPadding && styles.noPadding,
        style, // Your custom style overrides last
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: 'rgba(255, 153, 51, 0.1)', // Soft orange glow background
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#FF9933',
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginVertical: 10, // Safe spacing when stacked
    // Subtle shadow for depth
    shadowColor: '#FF6600',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6, // Android shadow
  },
  elevated: {
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 12,
    borderColor: '#FF6600',
  },
  noPadding: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default CognitiveCard;