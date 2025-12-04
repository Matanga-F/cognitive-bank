import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { darkTheme, lightTheme, COGNITIVE_CONSTANTS } from "./themes";

// Create Context
const ThemeContext = createContext(null);

// Storage Key
const THEME_STORAGE_KEY = "@CognitiveBank:themeMode";

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [mode, setModeState] = useState("system");
  const [isReady, setIsReady] = useState(false);

  // Load saved theme preference on startup
  useEffect(() => {
    (async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
          setModeState(savedTheme);
        } else {
          setModeState("system");
        }
      } catch (error) {
        console.warn("Failed to load theme preference:", error);
        setModeState("system");
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  // Current theme object
  const theme = useMemo(() => {
    if (mode === "system") {
      return systemColorScheme === "dark" ? darkTheme : lightTheme;
    }
    return mode === "dark" ? darkTheme : lightTheme;
  }, [mode, systemColorScheme]);

  const isDark = useMemo(() => {
    if (mode === "system") {
      return systemColorScheme === "dark";
    }
    return mode === "dark";
  }, [mode, systemColorScheme]);

  const isSystem = mode === "system";

  const setMode = async (newMode) => {
    setModeState(newMode);
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newMode);
    } catch (error) {
      console.warn("Failed to save theme preference:", error);
    }
  };

  const toggleTheme = () => {
    const newMode = isDark ? "light" : "dark";
    setMode(newMode);
  };

  if (!isReady) {
    return null; // Could show a splash screen here
  }

  const contextValue = {
    mode,
    theme,
    constants: COGNITIVE_CONSTANTS,
    toggleTheme,
    setMode,
    isDark,
    isSystem,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
