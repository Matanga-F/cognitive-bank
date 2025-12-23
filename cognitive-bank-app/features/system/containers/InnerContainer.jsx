// features/system/containers/InnerContainer.jsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const InnerContainer = ({ title, children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {title && <Text style={styles.title}>{title}</Text>}
      
      <View style={styles.card}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FF9933",
    marginBottom: 20,
    marginLeft: 4,
  },
  card: {
    backgroundColor: "rgba(30, 20, 10, 0.45)",
    borderRadius: 28,
    padding: 28,
    borderWidth: 1,
    borderColor: "rgba(255, 136, 0, 0.25)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
});

export default InnerContainer;