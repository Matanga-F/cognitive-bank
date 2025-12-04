import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import CognitiveTransaction from "../components/banking/transactions/CognitiveTransaction";

const CognitiveTransactionDemo = () => {
  const { theme, constants } = useTheme();

  const transactionExamples = [
    {
      id: '1',
      title: 'Salary Deposit',
      description: 'Monthly salary from Company Inc.',
      amount: 4500,
      type: 'income',
      status: 'completed',
      category: 'Salary',
      merchant: 'Company Inc.',
      date: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Grocery Shopping',
      description: 'Weekly groceries at Walmart',
      amount: 125.75,
      type: 'expense',
      status: 'completed',
      category: 'Food',
      merchant: 'Walmart',
      date: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: '3',
      title: 'Netflix Subscription',
      description: 'Monthly entertainment subscription',
      amount: 15.99,
      type: 'payment',
      status: 'pending',
      category: 'Entertainment',
      merchant: 'Netflix',
      date: new Date(Date.now() - 259200000).toISOString(),
      neuralScore: 60,
    },
    {
      id: '4',
      title: 'Payment to Vendor',
      description: 'Payment failed due to insufficient funds',
      amount: 250.00,
      type: 'payment',
      status: 'failed',
      category: 'Business',
      merchant: 'ABC Supplies',
      date: new Date(Date.now() - 172800000).toISOString(),
    },
    {
      id: '5',
      title: 'Money Transfer',
      description: 'Transfer to savings account',
      amount: 500,
      type: 'transfer',
      status: 'completed',
      category: 'Transfer',
      merchant: 'Internal Transfer',
      date: new Date(Date.now() - 345600000).toISOString(),
      neuralScore: 75,
    },
  ];

  const handleTransactionPress = (transactionTitle) => {
    Alert.alert(
      'Transaction Selected',
      `You tapped: ${transactionTitle}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background.primary }}>
      <View style={{ padding: constants.spacing.md }}>
        
        <Text style={{
          fontSize: constants.typography.heading1,
          fontWeight: '700',
          color: theme.text.primary,
          marginBottom: constants.spacing.lg,
        }}>
          Transaction Examples
        </Text>

        <Text style={{
          fontSize: constants.typography.body,
          color: theme.text.secondary,
          marginBottom: constants.spacing.xl,
        }}>
          Showing different transaction types and states
        </Text>

        {transactionExamples.map((transaction, index) => (
          <View key={transaction.id} style={{ marginBottom: constants.spacing.lg }}>
            <Text style={{
              fontSize: constants.typography.caption,
              color: theme.text.secondary,
              marginBottom: constants.spacing.sm,
            }}>
              Example {index + 1}: {transaction.type} ({transaction.status})
            </Text>
            
            <CognitiveTransaction
              title={transaction.title}
              description={transaction.description}
              amount={transaction.amount}
              type={transaction.type}
              status={transaction.status}
              category={transaction.category}
              merchant={transaction.merchant}
              date={transaction.date}
              neuralScore={transaction.neuralScore}
              onPress={() => handleTransactionPress(transaction.title)}
            />
          </View>
        ))}
        
      </View>
    </ScrollView>
  );
};

export default CognitiveTransactionDemo;