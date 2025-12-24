// components/common/CognitiveTransactionItem.jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CognitiveTransactionItem = ({
  type = 'debit', // 'debit', 'credit'
  amount,
  description,
  date,
  iconName = 'swap-horizontal',
}) => {
  const isCredit = type === 'credit';
  const amountColor = isCredit ? '#00CC66' : '#FF3B30';
  const amountPrefix = isCredit ? '+' : '-';

  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={24} color="#FF9933" style={styles.icon} />
      
      <View style={styles.details}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      
      <Text style={[styles.amount, { color: amountColor }]}>
        {amountPrefix} R {amount.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 153, 51, 0.2)',
  },
  icon: {
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  date: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: 4,
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CognitiveTransactionItem;