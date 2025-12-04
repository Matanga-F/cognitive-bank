import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useTheme } from "../../theme/ThemeProvider";

const CognitiveHeader = ({ heading, description }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.heading, { color: theme.text.primary }]}>
        {heading}
      </Text>

      <Text style={[styles.description, { color: theme.text.secondary }]}>
        {description}
      </Text>
    </View>
  );
};

export default CognitiveHeader;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    textAlign: "center",
    opacity: 0.8,
    maxWidth: 300,
  },
});
