// components/common/CognitiveHeader.jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import InnerContainer from '../../features/system/containers/InnerContainer';

const CognitiveHeader = ({ heading, description }) => {
  const { theme } = useTheme();

  return (
    <InnerContainer style={styles.container}>
      <View style={styles.content}>
        {heading && (
          <Text style={[theme.ui.title, styles.heading]}>{heading}</Text>
        )}
        
        {description && (
          <Text style={styles.description}>{description}</Text>
        )}
      </View>
    </InnerContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',        // Better to let InnerContainer handle padding/margins
    alignItems: 'center', // Centers content horizontally
  },
  content: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 340,        // Reasonable max width for readability on larger screens
  },
  heading: {
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    fontFamily: 'BLANCO', // Make sure this font is properly loaded in your project
    textAlign: 'center',
    color: 'rgba(255, 215, 0, 0.6)', // Slightly increased opacity for better readability
    lineHeight: 22,
    opacity: 0.9,
  },
});

export default CognitiveHeader;