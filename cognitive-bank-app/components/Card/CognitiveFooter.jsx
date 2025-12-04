import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { useTheme } from "../../theme/ThemeProvider";

const CognitiveFooter = ({ support, organization }) => {
  const { theme, mode, toggleTheme } = useTheme();

  return (
    <View style={styles.footer}>
      <Text style={[styles.footerText, { color: theme.text.secondary }]}>
        Powered by {support}
      </Text>

      <Text style={[styles.version, { color: theme.text.secondary }]}>
        {organization}
      </Text>
    </View>
  );
};

export default CognitiveFooter;

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 12,
    opacity: 0.75,
  },
  version: {
    fontSize: 11,
    opacity: 0.55,
    marginTop: 5,
  },
});
