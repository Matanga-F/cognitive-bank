// screens/Profile/CognitiveProfile.jsx
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import { useTheme } from "../../../theme/ThemeProvider";
import MainContainer from "../../../features/system/containers/MainContainer";
import CognitiveFooter from "../../../components/Card/CognitiveFooter";
import { Ionicons } from "@expo/vector-icons";

export default function CognitiveProfile({ navigation }) {
  const { theme } = useTheme();

  // Mock user data — replace with real auth context later
  const user = {
    fullName: "Ethan Brooks",
    email: "ethan.brooks@clientservices.com",
    phone: "+27114567890",
    memberSince: "December 2025",
    accountType: "Premium Private Client",
    status: "Active",
  };

  // Animation
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1100,
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
          {/* Profile Header */}
          <View style={styles.header}>
            <View style={styles.avatarContainer}>
              {/* Placeholder for user avatar - you can add Image later */}
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {user.fullName.split(" ").map((n) => n[0]).join("")}
                </Text>
              </View>
              <View style={styles.onlineIndicator} />
            </View>

            <Text style={[styles.userName, theme.ui.title]}>{user.fullName}</Text>
            <Text style={styles.accountType}>{user.accountType}</Text>
          </View>

          {/* Profile Details Card */}
          <View style={styles.detailsCard}>
            <Text style={styles.sectionTitle}>Personal Information</Text>

            <View style={styles.detailRow}>
              <Ionicons name="mail-outline" size={20} color="#FFAA33" />
              <View style={styles.detailText}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{user.email}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="call-outline" size={20} color="#FFAA33" />
              <View style={styles.detailText}>
                <Text style={styles.label}>Phone</Text>
                <Text style={styles.value}>{user.phone}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="calendar-outline" size={20} color="#FFAA33" />
              <View style={styles.detailText}>
                <Text style={styles.label}>Member Since</Text>
                <Text style={styles.value}>{user.memberSince}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="shield-checkmark-outline" size={20} color="#34C759" />
              <View style={styles.detailText}>
                <Text style={styles.label}>Account Status</Text>
                <Text style={[styles.value, { color: "#34C759" }]}>{user.status}</Text>
              </View>
            </View>
          </View>

          {/* Settings & Actions */}
          <View style={styles.actionsCard}>
            <Text style={styles.sectionTitle}>Settings & Preferences</Text>

            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="person-outline" size={22} color="#FF9933" />
              <Text style={styles.actionText}>Edit Profile</Text>
              <Ionicons name="chevron-forward" size={20} color="#FFAA33" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="lock-closed-outline" size={22} color="#FF9933" />
              <Text style={styles.actionText}>Change Password</Text>
              <Ionicons name="chevron-forward" size={20} color="#FFAA33" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="finger-print-outline" size={22} color="#FF9933" />
              <Text style={styles.actionText}>Biometric Authentication</Text>
              <Ionicons name="chevron-forward" size={20} color="#FFAA33" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="notifications-outline" size={22} color="#FF9933" />
              <Text style={styles.actionText}>Notifications</Text>
              <Ionicons name="chevron-forward" size={20} color="#FFAA33" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="moon-outline" size={22} color="#FF9933" />
              <Text style={styles.actionText}>Dark Mode</Text>
              <Ionicons name="chevron-forward" size={20} color="#FFAA33" />
            </TouchableOpacity>
          </View>

          {/* Security & Support */}
          <View style={styles.supportCard}>
            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="help-circle-outline" size={22} color="#FF9933" />
              <Text style={styles.actionText}>Help & Support</Text>
              <Ionicons name="chevron-forward" size={20} color="#FFAA33" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="document-text-outline" size={22} color="#FF9933" />
              <Text style={styles.actionText}>Terms & Privacy</Text>
              <Ionicons name="chevron-forward" size={20} color="#FFAA33" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.actionItem, styles.logoutItem]}>
              <Ionicons name="log-out-outline" size={22} color="#FF4444" />
              <Text style={[styles.actionText, { color: "#FF4444" }]}>Sign Out</Text>
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
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(255, 153, 51, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FF9933",
  },
  avatarText: {
    fontSize: 42,
    fontWeight: "900",
    color: "#FF9933",
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#34C759",
    borderWidth: 3,
    borderColor: "#000",
  },
  userName: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
  },
  accountType: {
    fontSize: 16,
    color: "#FFAA33",
    marginTop: 8,
    fontWeight: "600",
  },
  detailsCard: {
    backgroundColor: "rgba(30, 20, 10, 0.4)",
    borderRadius: 24,
    padding: 28,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "rgba(255, 136, 0, 0.3)",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FF9933",
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  detailText: {
    marginLeft: 16,
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: "#FFAA33",
    opacity: 0.8,
  },
  value: {
    fontSize: 17,
    color: "#FFFFFF",
    fontWeight: "600",
    marginTop: 4,
  },
  actionsCard: {
    backgroundColor: "rgba(30, 20, 10, 0.4)",
    borderRadius: 24,
    padding: 28,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "rgba(255, 136, 0, 0.3)",
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 153, 51, 0.1)",
  },
  actionText: {
    fontSize: 17,
    color: "#FFFFFF",
    flex: 1,
    marginLeft: 16,
  },
  supportCard: {
    backgroundColor: "rgba(30, 20, 10, 0.4)",
    borderRadius: 24,
    padding: 28,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "rgba(255, 136, 0, 0.3)",
  },
  logoutItem: {
    borderBottomWidth: 0,
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