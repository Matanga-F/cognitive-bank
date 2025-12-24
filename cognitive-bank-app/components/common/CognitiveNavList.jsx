// components/common/CognitiveNavList.jsx
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CognitiveNavList = ({
  data = [],               // Array of items (required)
  horizontal = false,      // Optional: horizontal scroll (e.g., account switcher)
  showSeparators = true,   // Bottom borders between items
  style,
}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, showSeparators && styles.withSeparator]}
      onPress={item.onPress}
      activeOpacity={0.7}
    >
      <View style={styles.leftContent}>
        {item.icon && (
          <Ionicons
            name={item.icon}
            size={24}
            color="#FF9933"
            style={styles.icon}
          />
        )}
        <View style={styles.textContent}>
          <Text style={styles.title}>{item.title}</Text>
          {item.subtitle && (
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          )}
        </View>
      </View>

      {item.rightContent || (
        <Ionicons name="chevron-forward" size={20} color="#FF9933" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id || item.title}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={horizontal && styles.horizontalContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  withSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 153, 51, 0.2)',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 16,
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 13,
    color: 'rgba(255, 215, 0, 0.7)',
    marginTop: 2,
  },
  horizontalContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default CognitiveNavList;