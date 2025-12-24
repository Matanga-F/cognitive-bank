// components/common/CognitiveBalanceDisplay.jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CognitiveBalanceDisplay = ({
  balance,
  currency = 'R',
  label = 'Available Balance',
  showIcon = true,
}) => {
  return (
    <View style={styles.container}>
      {showIcon && <Ionicons name="wallet-outline" size={28} color="#FF9933" style={styles.icon} />}
      
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.balance}>{currency} {balance.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 153, 51, 0.15)',
    borderRadius: 16,
    padding: 20,
    marginVertical: 12,
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  balance: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default CognitiveBalanceDisplay;