import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { darkTheme, lightTheme, COGNITIVE_CONSTANTS } from "./themes";

const ThemeContext = createContext(null);
const STORAGE_KEY = "@CognitiveBank:themeMode";

export const ThemeProvider = ({ children }) => {
  const system = useColorScheme();
  const [mode, setMode] = useState("system");
  const [ready, setReady] = useState(false);

  // Load stored preference
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) setMode(saved);
      } catch (e) {
        console.warn("Theme load error:", e);
      }
      setReady(true);
    })();
  }, []);

  // Pick theme
  const theme = mode === "system"
    ? (system === "dark" ? darkTheme : lightTheme)
    : (mode === "dark" ? darkTheme : lightTheme);

  const isDark = mode === "system" ? system === "dark" : mode === "dark";

  const changeMode = async (newMode) => {
    setMode(newMode);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, newMode);
    } catch (e) {
      console.warn("Theme save error:", e);
    }
  };

  const toggleTheme = () => changeMode(isDark ? "light" : "dark");

  if (!ready) return null; // or a simple loading screen

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme,
        isDark,
        toggleTheme,
        setMode: changeMode,
        constants: COGNITIVE_CONSTANTS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};

export default ThemeContext;
