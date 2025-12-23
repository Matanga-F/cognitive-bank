// components/Cards/TransactionCard.jsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import InnerContainer from "../../features/system/containers/InnerContainer";
import { Ionicons } from "@expo/vector-icons";

const CognitiveTransactionCard = ({ transaction }) => {
  const { theme } = useTheme();
  
  const getIcon = (type) => {
    switch (type) {
      case "deposit": return "arrow-down-circle";
      case "withdrawal": return "arrow-up-circle";
      case "transfer": return "swap-horizontal";
      case "payment": return "card";
      default: return "cash";
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case "deposit": return "#34C759";
      case "withdrawal": return "#FF3B30";
      case "transfer": return "#007AFF";
      case "payment": return "#FF9500";
      default: return "#8E8E93";
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <InnerContainer title={null} style={styles.transactionContainer}>
        <View style={styles.transactionContent}>
          <View style={styles.transactionLeft}>
            <View style={[styles.iconContainer, { backgroundColor: getIconColor(transaction.type) + "15" }]}>
              <Ionicons 
                name={getIcon(transaction.type)} 
                size={22} 
                color={getIconColor(transaction.type)} 
              />
            </View>
            <View style={styles.transactionInfo}>
              <Text style={[styles.transactionTitle, { color: theme.text.primary }]}>
                {transaction.title}
              </Text>
              <Text style={[styles.transactionCategory, { color: theme.text.secondary }]}>
                {transaction.category}
              </Text>
            </View>
          </View>
          
          <View style={styles.transactionRight}>
            <Text 
              style={[
                styles.transactionAmount,
                { color: transaction.type === "deposit" ? "#34C759" : theme.text.primary }
              ]}
            >
              {transaction.type === "deposit" ? "+ " : "- "}
              {transaction.amount}
            </Text>
            <Text style={[styles.transactionDate, { color: theme.text.secondary }]}>
              {transaction.date}
            </Text>
          </View>
        </View>
        
        {transaction.status && (
          <View style={[styles.statusBadge, { 
            backgroundColor: transaction.status === "completed" ? "#34C75915" : "#FF950015" 
          }]}>
            <Text style={[
              styles.statusText, 
              { color: transaction.status === "completed" ? "#34C759" : "#FF9500" }
            ]}>
              {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
            </Text>
          </View>
        )}
      </InnerContainer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {
    marginBottom: 12,
  },
  transactionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "BLANCO",
    marginBottom: 4,
  },
  transactionCategory: {
    fontSize: 14,
    opacity: 0.7,
  },
  transactionRight: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "BLANCO",
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 13,
    opacity: 0.6,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default CognitiveTransactionCard;