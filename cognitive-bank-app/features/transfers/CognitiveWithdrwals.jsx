// components/Sections/TransferSection.jsx
import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput,
  ScrollView 
} from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import InnerContainer from "../../features/system/containers/InnerContainer";
import { Ionicons } from "@expo/vector-icons";

const CognitiveTransferSection = ({ accounts, onTransfer }) => {
  const { theme } = useTheme();
  const [transferData, setTransferData] = useState({
    fromAccount: accounts[0]?.id || "",
    toAccount: "",
    amount: "",
    description: "",
  });

  const transferTypes = [
    { id: "instant", label: "Instant", icon: "flash", fee: "R 25.00" },
    { id: "standard", label: "Standard", icon: "time", fee: "R 10.00", time: "2-3 business days" },
    { id: "scheduled", label: "Scheduled", icon: "calendar", fee: "Free" },
  ];

  const [selectedType, setSelectedType] = useState("instant");

  return (
    <InnerContainer title="Make a Transfer" style={styles.transferContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* From Account */}
        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: theme.text.secondary }]}>
            From Account
          </Text>
          <View style={styles.accountSelector}>
            {accounts.slice(0, 3).map((account) => (
              <TouchableOpacity
                key={account.id}
                style={[
                  styles.accountOption,
                  transferData.fromAccount === account.id && styles.selectedAccountOption,
                  transferData.fromAccount === account.id && { 
                    backgroundColor: theme.ui.primary + "20",
                    borderColor: theme.ui.primary 
                  }
                ]}
                onPress={() => setTransferData({...transferData, fromAccount: account.id})}
              >
                <Text 
                  style={[
                    styles.accountOptionText,
                    { color: theme.text.secondary },
                    transferData.fromAccount === account.id && { color: theme.ui.primary }
                  ]}
                >
                  {account.name}
                </Text>
                <Text style={[styles.accountOptionBalance, { color: theme.text.primary }]}>
                  {account.balance}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Transfer Type */}
        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: theme.text.secondary }]}>
            Transfer Type
          </Text>
          <View style={styles.typeSelector}>
            {transferTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.typeOption,
                  selectedType === type.id && styles.selectedTypeOption,
                  selectedType === type.id && { backgroundColor: theme.ui.primary + "20" }
                ]}
                onPress={() => setSelectedType(type.id)}
              >
                <Ionicons 
                  name={type.icon} 
                  size={20} 
                  color={selectedType === type.id ? theme.ui.primary : theme.text.secondary} 
                />
                <Text 
                  style={[
                    styles.typeLabel,
                    { color: selectedType === type.id ? theme.ui.primary : theme.text.secondary }
                  ]}
                >
                  {type.label}
                </Text>
                <Text style={[styles.typeFee, { color: theme.text.secondary }]}>
                  Fee: {type.fee}
                </Text>
                {type.time && (
                  <Text style={[styles.typeTime, { color: theme.text.secondary }]}>
                    {type.time}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Amount Input */}
        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: theme.text.secondary }]}>
            Amount
          </Text>
          <View style={[styles.amountInput, { borderColor: theme.ui.border }]}>
            <Text style={[styles.currency, { color: theme.text.primary }]}>
              R
            </Text>
            <TextInput
              style={[styles.amountField, { color: theme.text.primary }]}
              placeholder="0.00"
              placeholderTextColor={theme.text.secondary}
              value={transferData.amount}
              onChangeText={(text) => setTransferData({...transferData, amount: text})}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Description */}
        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: theme.text.secondary }]}>
            Description (Optional)
          </Text>
          <TextInput
            style={[styles.descriptionInput, { 
              color: theme.text.primary, 
              borderColor: theme.ui.border 
            }]}
            placeholder="e.g., Rent payment, Shopping, etc."
            placeholderTextColor={theme.text.secondary}
            value={transferData.description}
            onChangeText={(text) => setTransferData({...transferData, description: text})}
          />
        </View>

        {/* Transfer Summary */}
        <View style={styles.summaryCard}>
          <Text style={[styles.summaryTitle, { color: theme.text.primary }]}>
            Transfer Summary
          </Text>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.text.secondary }]}>
              Amount
            </Text>
            <Text style={[styles.summaryValue, { color: theme.text.primary }]}>
              R {transferData.amount || "0.00"}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.text.secondary }]}>
              Fee
            </Text>
            <Text style={[styles.summaryValue, { color: "#FF3B30" }]}>
              - R 25.00
            </Text>
          </View>
          <View style={[styles.summaryTotal, { borderTopColor: theme.ui.border }]}>
            <Text style={[styles.totalLabel, { color: theme.text.primary }]}>
              Total
            </Text>
            <Text style={[styles.totalValue, { color: theme.text.primary }]}>
              R {(parseFloat(transferData.amount) || 0) + 25}
            </Text>
          </View>
        </View>

        {/* Transfer Button */}
        <TouchableOpacity
          style={[styles.transferButton, { backgroundColor: theme.ui.primary }]}
          onPress={() => onTransfer(transferData)}
        >
          <Text style={styles.transferButtonText}>
            Confirm Transfer
          </Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </ScrollView>
    </InnerContainer>
  );
};

const styles = StyleSheet.create({
  transferContainer: {
    marginBottom: 32,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 12,
    fontFamily: "BLANCO",
  },
  accountSelector: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  accountOption: {
    flex: 1,
    minWidth: 100,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 153, 51, 0.2)",
  },
  selectedAccountOption: {
    borderColor: "#FF9933",
  },
  accountOptionText: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "BLANCO",
    marginBottom: 4,
  },
  accountOptionBalance: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "BLANCO",
  },
  typeSelector: {
    flexDirection: "row",
    gap: 12,
  },
  typeOption: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 153, 51, 0.2)",
  },
  selectedTypeOption: {
    borderColor: "#FF9933",
  },
  typeLabel: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "BLANCO",
    marginTop: 8,
  },
  typeFee: {
    fontSize: 12,
    marginTop: 4,
    opacity: 0.7,
  },
  typeTime: {
    fontSize: 11,
    marginTop: 2,
    opacity: 0.6,
  },
  amountInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  currency: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "BLANCO",
    marginRight: 12,
  },
  amountField: {
    flex: 1,
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "BLANCO",
  },
  descriptionInput: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    fontFamily: "BLANCO",
  },
  summaryCard: {
    backgroundColor: "rgba(255, 153, 51, 0.05)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "BLANCO",
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    fontFamily: "BLANCO",
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "BLANCO",
  },
  summaryTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "BLANCO",
  },
  totalValue: {
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "BLANCO",
  },
  transferButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    borderRadius: 20,
    gap: 12,
  },
  transferButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "BLANCO",
  },
});

export default CognitiveTransferSection;