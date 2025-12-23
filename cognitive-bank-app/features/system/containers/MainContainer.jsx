// features/system/containers/MainContainer.jsx
import React, { useContext, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, Animated, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { AppContext } from '../../../contexts/AppContext';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const MainContainer = ({ children }) => {
  const context = useContext(AppContext);
  const theme = context?.theme || {};

  // Subtle animated light sweeps (like sunlight reflecting off marble/gold)
  const sweepAnim1 = useRef(new Animated.Value(-1)).current;
  const sweepAnim2 = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    const createSweepAnimation = (animValue, duration = 8000) => {
      return Animated.loop(
        Animated.timing(animValue, {
          toValue: 1,
          duration,
          useNativeDriver: true,
          delay: Math.random() * 2000,
        })
      );
    };

    createSweepAnimation(sweepAnim1, 10000).start();
    createSweepAnimation(sweepAnim2, 12000).start();

    return () => {
      sweepAnim1.stopAnimation();
      sweepAnim2.stopAnimation();
    };
  }, []);

  // Interpolate for horizontal light sweep across screen
  const sweepTranslateX1 = sweepAnim1.interpolate({
    inputRange: [-1, 1],
    outputRange: [-screenWidth, screenWidth],
  });

  const sweepTranslateX2 = sweepAnim2.interpolate({
    inputRange: [-1, 1],
    outputRange: [-screenWidth, screenWidth],
  });

  return (
    <View style={styles.container}>
      {/* Luxurious deep black → warm amber gradient */}
      <LinearGradient
        colors={[
          '#000000',           // Pure black (top)
          '#1a1200',           // Deep charcoal-amber
          '#2d1800',           // Rich dark amber
          '#331a00',           // Warm golden undertone (bottom)
        ]}
        style={styles.gradientContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />

      {/* Subtle golden light sweeps (like sunlight on polished surfaces) */}
      <Animated.View
        style={[
          styles.lightSweep,
          styles.lightSweep1,
          { transform: [{ translateX: sweepTranslateX1 }] },
        ]}
      />
      <Animated.View
        style={[
          styles.lightSweep,
          styles.lightSweep2,
          { transform: [{ translateX: sweepTranslateX2 }] },
        ]}
      />

      {/* Elegant glassmorphic overlay with refined blur and border */}
      <BlurView intensity={Platform.OS === 'ios' ? 30 : 20} tint="dark" style={styles.glassContainer}>
        <View style={styles.glassInner}>
          {/* Ultra-subtle inner glow border */}
          <View style={styles.innerGlowBorder} />

          {/* Main content area */}
          <View style={styles.contentWrapper}>
            {children}
          </View>
        </View>
      </BlurView>

      {/* Optional: Very faint grain/noise overlay for premium texture */}
      <View style={styles.textureOverlay} pointerEvents="none" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  lightSweep: {
    position: 'absolute',
    width: screenWidth * 0.6,
    height: '100%',
    backgroundColor: 'transparent',
  },
  lightSweep1: {
    top: 0,
    opacity: 0.08,
    backgroundColor: '#FF8800',
    transform: [{ rotate: '20deg' }],
  },
  lightSweep2: {
    bottom: 0,
    opacity: 0.06,
    backgroundColor: '#FFAA33',
    transform: [{ rotate: '-15deg' }],
  },
  glassContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  glassInner: {
    flex: 1,
    backgroundColor: 'rgba(20, 15, 10, 0.25)', // Deep warm transparent black
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'rgba(255, 136, 0, 0.15)', // Subtle orange-gold border
    overflow: 'hidden',
    position: 'relative',
  },
  innerGlowBorder: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    borderColor: 'rgba(255, 170, 51, 0.2)',
    borderRadius: 0,
    pointerEvents: 'none',
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  textureOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    opacity: 0.03,
    pointerEvents: 'none',
    // You could add a noise texture here via ImageBackground if desired
  },
});

export default MainContainer;