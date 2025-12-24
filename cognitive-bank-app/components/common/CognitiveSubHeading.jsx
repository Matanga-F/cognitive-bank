// components/common/CognitiveSubHeading.jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InnerContainer from '../../features/system/containers/InnerContainer';

const CognitiveSubHeading = ({ children, text }) => {
  // Support both `children` (for JSX) and `text` prop (for string)
  const content = children || text;

  if (!content) return null;

  return (
    <InnerContainer style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.subHeading}>{content}</Text>
      </View>
    </InnerContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 8,           // Small spacing after main heading
  },
  content: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 360,
  },
  subHeading: {
    fontSize: 15,
    fontFamily: 'BLANCO',
    textAlign: 'center',
    color: 'rgba(255, 215, 0, 0.65)',  // Soft gold/orange glow
    lineHeight: 22,
    opacity: 0.9,
  },
});

export default CognitiveSubHeading;