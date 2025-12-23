// screens/Dashboard/DashboardScreen.jsx (Updated)
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import MainContainer from "../../features/system/containers/MainContainer";
import CognitiveHeader from "../../components/Card/CognitiveHeader";
import CognitiveAccountCard from "../../features/cards/CognitiveAccountCard"
import CognitiveTransferSection from "../../features/transfers/CognitiveWithdrwals"
import CognitiveTransactionHistory from "../../features/transfers/CognitiveTransactionHistory"
import CognitiveFooter from "../../components/Card/CognitiveFooter";
import { Ionicons } from "@expo/vector-icons";

export default function CognitiveDashboard ({ navigation }) {
  const { theme } = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(slideUpAnim, {
        toValue: 0,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Mock data
  const portfolioValue = "R 4,827,310.50";
  const accounts = [
    {
      id: 1,
      name: "Private Investment Account",
      balance: "R 2,940,000.00",
      type: "Investment",
      accountNumber: "**** 4832",
      lastTransaction: "R 250,000 deposit"
    },
    {
      id: 2,
      name: "Premium Cheque Account",
      balance: "R 1,450,000.00",
      type: "Current",
      accountNumber: "**** 2198",
      lastTransaction: "R 45,000 transfer"
    },
    {
      id: 3,
      name: "Offshore Portfolio",
      balance: "R 437,310.50",
      type: "Foreign",
      accountNumber: "**** 7654",
      lastTransaction: "R 12,500 withdrawal"
    }
  ];

  const transactions = [
    {
      id: 1,
      title: "Salary Deposit",
      category: "Income",
      amount: "R 85,430.50",
      date: "Today",
      type: "deposit",
      status: "completed"
    },
    {
      id: 2,
      title: "Rent Payment",
      category: "Housing",
      amount: "R 25,000.00",
      date: "Yesterday",
      type: "withdrawal",
      status: "completed"
    },
    {
      id: 3,
      title: "Stock Investment",
      category: "Investment",
      amount: "R 40,000.00",
      date: "2 days ago",
      type: "transfer",
      status: "pending"
    },
    {
      id: 4,
      title: "Grocery Shopping",
      category: "Shopping",
      amount: "R 3,245.75",
      date: "3 days ago",
      type: "payment",
      status: "completed"
    },
    {
      id: 5,
      title: "Freelance Payment",
      category: "Income",
      amount: "R 15,000.00",
      date: "4 days ago",
      type: "deposit",
      status: "completed"
    }
  ];

  const handleTransfer = (data) => {
    console.log("Transfer initiated:", data);
    // Handle transfer logic here
  };

  const handleViewAllTransactions = () => {
    navigation.navigate("Transactions");
  };

  return (
    <MainContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideUpAnim }],
            },
          ]}
        >
          {/* Header */}
          <View style={styles.header}>
            <CognitiveHeader 
              heading={"Cognitive Bank"} 
              description={"Banking with intelligent friend"} 
            />
          </View>

          {/* Total Portfolio Card */}
          <View style={[styles.portfolioCard, { backgroundColor: theme.ui.surface }]}>
            <Text style={[styles.portfolioLabel, { color: theme.text.secondary }]}>
              Total Portfolio Value
            </Text>
            <Text style={[styles.portfolioValue, { color: theme.text.primary }]}>
              {portfolioValue}
            </Text>
            
            <View style={styles.gainContainer}>
              <Ionicons name="trending-up" size={24} color="#34C759" />
              <Text style={styles.gainText}>+12.84%</Text>
              <Text style={styles.gainAmount}>+R 548,920.00</Text>
            </View>
          </View>

          {/* Accounts Section */}
          <Text style={[styles.sectionTitle, { color: theme.ui.primary }]}>
            Your Accounts
          </Text>
          {accounts.map((account) => (
            <CognitiveAccountCard 
              key={account.id} 
              account={account}
              onPress={() => navigation.navigate("AccountDetails", { account })}
            />
          ))}

          {/* Transfer Section */}
          <CognitiveTransferSection 
            accounts={accounts}
            onTransfer={handleTransfer}
          />

          {/* Transaction History */}
          <CognitiveTransactionHistory
            transactions={transactions}
            onViewAll={handleViewAllTransactions}
          />

          {/* Quick Actions */}
          <View style={styles.quickActions}>
            <TouchableOpacity style={[styles.actionButton, { backgroundColor: theme.ui.surface }]}>
              <Ionicons name="document-text" size={24} color={theme.ui.primary} />
              <Text style={[styles.actionText, { color: theme.text.primary }]}>
                Statements
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.actionButton, { backgroundColor: theme.ui.surface }]}>
              <Ionicons name="shield-checkmark" size={24} color={theme.ui.primary} />
              <Text style={[styles.actionText, { color: theme.text.primary }]}>
                Security
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.actionButton, { backgroundColor: theme.ui.surface }]}>
              <Ionicons name="settings" size={24} color={theme.ui.primary} />
              <Text style={[styles.actionText, { color: theme.text.primary }]}>
                Settings
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footerWrapper}>
        <CognitiveFooter support="Cognitive" organization="Intellince" />
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 120,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    marginBottom: 32,
  },
  portfolioCard: {
    borderRadius: 28,
    padding: 28,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "rgba(255, 153, 51, 0.3)",
  },
  portfolioLabel: {
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.9,
    marginBottom: 8,
  },
  portfolioValue: {
    fontSize: 40,
    fontWeight: "900",
    fontFamily: "BLANCO",
    marginBottom: 20,
  },
  gainContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  gainText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#34C759",
  },
  gainAmount: {
    fontSize: 18,
    color: "#34C759",
    opacity: 0.9,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "BLANCO",
    marginBottom: 16,
    marginTop: 8,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 24,
    marginBottom: 40,
  },
  actionButton: {
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 20,
    minWidth: 100,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "BLANCO",
    marginTop: 8,
  },
  footerWrapper: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});