// components/common/CognitiveModal.jsx
import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import CognitiveButton from './CognitiveButton';
import CognitiveCard from './CognitiveCard';

const CognitiveModal = ({
  visible,
  onClose,
  title,
  message,
  primaryButton = { title: 'Confirm', onPress: () => {} },
  secondaryButton = { title: 'Cancel', onPress: onClose },
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <CognitiveCard style={styles.card}>
          {title && <Text style={styles.title}>{title}</Text>}
          {message && <Text style={styles.message}>{message}</Text>}
          
          <View style={styles.buttons}>
            {secondaryButton && (
              <CognitiveButton
                title={secondaryButton.title}
                onPress={secondaryButton.onPress}
                variant="text"
                style={styles.button}
              />
            )}
            {primaryButton && (
              <CognitiveButton
                title={primaryButton.title}
                onPress={primaryButton.onPress}
                style={styles.button}
              />
            )}
          </View>
        </CognitiveCard>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 20,
  },
  card: {
    maxWidth: 340,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default CognitiveModal;