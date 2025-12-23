// components/Cards/AccountCard.jsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import InnerContainer from "../../features/system/containers/InnerContainer";
import { Ionicons } from "@expo/vector-icons";

const CognitiveAccountCard = ({ account, onPress }) => {
  const { theme } = useTheme();
  
  const getAccountIcon = (type) => {
    switch (type) {
      case "Investment": return "trending-up";
      case "Current": return "card";
      case "Savings": return "wallet";
      case "Foreign": return "globe";
      case "Business": return "business";
      default: return "cash";
    }
  };

  const getAccountColor = (type) => {
    switch (type) {
      case "Investment": return "#5856D6";
      case "Current": return "#FF9500";
      case "Savings": return "#34C759";
      case "Foreign": return "#007AFF";
      case "Business": return "#FF2D55";
      default: return "#8E8E93";
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <InnerContainer title={null} style={styles.accountContainer}>
        <View style={styles.accountHeader}>
          <View style={styles.accountIconContainer}>
            <View style={[
              styles.iconWrapper, 
              { backgroundColor: getAccountColor(account.type) + "20" }
            ]}>
              <Ionicons 
                name={getAccountIcon(account.type)} 
                size={24} 
                color={getAccountColor(account.type)} 
              />
            </View>
            <View style={styles.accountInfo}>
              <Text style={[styles.accountName, { color: theme.text.primary }]}>
                {account.name}
              </Text>
              <Text style={[styles.accountType, { color: theme.text.secondary }]}>
                {account.type} Account
              </Text>
            </View>
          </View>
          
          <Ionicons name="chevron-forward" size={20} color={theme.ui.primary} />
        </View>
        
        <View style={styles.accountBalanceSection}>
          <Text style={[styles.balanceLabel, { color: theme.text.secondary }]}>
            Available Balance
          </Text>
          <Text style={[styles.balanceAmount, { color: theme.text.primary }]}>
            {account.balance}
          </Text>
        </View>
        
        <View style={styles.accountDetails}>
          <View style={styles.detailItem}>
            <Text style={[styles.detailLabel, { color: theme.text.secondary }]}>
              Account Number
            </Text>
            <Text style={[styles.detailValue, { color: theme.text.primary }]}>
              {account.accountNumber}
            </Text>
          </View>
          
          {account.lastTransaction && (
            <View style={styles.detailItem}>
              <Text style={[styles.detailLabel, { color: theme.text.secondary }]}>
                Last Transaction
              </Text>
              <Text style={[styles.detailValue, { color: theme.text.primary }]}>
                {account.lastTransaction}
              </Text>
            </View>
          )}
        </View>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: theme.ui.primary + "15" }]}>
            <Ionicons name="arrow-down" size={18} color={theme.ui.primary} />
            <Text style={[styles.actionButtonText, { color: theme.ui.primary }]}>
              Deposit
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#FF3B3015" }]}>
            <Ionicons name="arrow-up" size={18} color="#FF3B30" />
            <Text style={[styles.actionButtonText, { color: "#FF3B30" }]}>
              Withdraw
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#007AFF15" }]}>
            <Ionicons name="swap-horizontal" size={18} color="#007AFF" />
            <Text style={[styles.actionButtonText, { color: "#007AFF" }]}>
              Transfer
            </Text>
          </TouchableOpacity>
        </View>
      </InnerContainer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  accountContainer: {
    marginBottom: 16,
  },
  accountHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  accountIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "BLANCO",
    marginBottom: 4,
  },
  accountType: {
    fontSize: 14,
    opacity: 0.7,
  },
  accountBalanceSection: {
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: "800",
    fontFamily: "BLANCO",
  },
  accountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 153, 51, 0.1)",
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "BLANCO",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 16,
    gap: 8,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "BLANCO",
  },
});

export default CognitiveAccountCard;