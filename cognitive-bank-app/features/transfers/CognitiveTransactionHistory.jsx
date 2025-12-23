// components/Sections/TransactionHistory.jsx
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import InnerContainer from "../../features/system/containers/InnerContainer";
import CognitiveTransactionCard from "../../features/cards/CognitiveTransacttionCard";

const CognitiveTransactionHistory = ({ transactions, onViewAll }) => {
  const { theme } = useTheme();
  
  const recentTransactions = transactions.slice(0, 5);

  return (
    <InnerContainer title="Recent Transactions" style={styles.historyContainer}>
      <View style={styles.historyHeader}>
        <Text style={[styles.sectionTitle, { color: theme.text.primary }]}>
          Transaction History
        </Text>
        {transactions.length > 5 && (
          <TouchableOpacity onPress={onViewAll}>
            <Text style={[styles.viewAllText, { color: theme.ui.primary }]}>
              View All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      
      {recentTransactions.length > 0 ? (
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.transactionsList}
        >
          {recentTransactions.map((transaction, index) => (
            <CognitiveTransactionCard
              key={index} 
              transaction={transaction} 
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyState}>
          <Text style={[styles.emptyText, { color: theme.text.secondary }]}>
            No transactions yet
          </Text>
          <Text style={[styles.emptySubtext, { color: theme.text.secondary }]}>
            Your transactions will appear here
          </Text>
        </View>
      )}
      
      <View style={styles.summary}>
        <View style={styles.summaryItem}>
          <Text style={[styles.summaryLabel, { color: theme.text.secondary }]}>
            Total Income
          </Text>
          <Text style={[styles.summaryValue, { color: "#34C759" }]}>
            +R 125,430.50
          </Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={[styles.summaryLabel, { color: theme.text.secondary }]}>
            Total Expenses
          </Text>
          <Text style={[styles.summaryValue, { color: "#FF3B30" }]}>
            -R 89,210.25
          </Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={[styles.summaryLabel, { color: theme.text.secondary }]}>
            Net Flow
          </Text>
          <Text style={[styles.summaryValue, { color: theme.ui.primary }]}>
            +R 36,220.25
          </Text>
        </View>
      </View>
    </InnerContainer>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    marginBottom: 32,
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "BLANCO",
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "BLANCO",
  },
  transactionsList: {
    paddingBottom: 8,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    opacity: 0.7,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 153, 51, 0.1)",
  },
  summaryItem: {
    alignItems: "center",
    flex: 1,
  },
  summaryLabel: {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "BLANCO",
  },
});

export default CognitiveTransactionHistory;