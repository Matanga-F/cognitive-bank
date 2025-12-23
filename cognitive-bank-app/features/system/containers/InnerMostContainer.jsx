// features/system/containers/InnerMostContainer.jsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InnerMostContainer = ({
  title,
  subtitle,
  value,
  rightContent,
  onPress,
  children,
  style,
}) => {
  const Content = (
    <View style={[styles.card, style]}>
      {(title || subtitle) && (
        <View style={styles.header}>
          {title && <Text style={styles.title}>{title}</Text>}
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      )}

      {value && <Text style={styles.value}>{value}</Text>}

      {rightContent && <View style={styles.rightContent}>{rightContent}</View>}

      {children && <View style={styles.children}>{children}</View>}
    </View>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress} activeOpacity={0.8}>{Content}</TouchableOpacity>;
  }

  return Content;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(40, 25, 10, 0.5)",
    borderRadius: 22,
    padding: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 153, 51, 0.3)",
    position: "relative",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 14,
    color: "#FFAA33",
    marginTop: 4,
    opacity: 0.9,
  },
  value: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
    marginVertical: 8,
  },
  rightContent: {
    position: "absolute",
    top: 24,
    right: 24,
    alignItems: "flex-end",
  },
  children: {
    marginTop: 12,
  },
});

export default InnerMostContainer;