import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useTheme } from "../../theme/ThemeProvider";
import InnerContainer from "../../features/system/containers/InnerContainer";

const CognitiveHeader = ({ heading, description }) => {
  const { theme } = useTheme();

  return (
    <InnerContainer 
      title={null} // Don't use InnerContainer's default title
      style={styles.headerContainer}
    >
      <View style={styles.headerContent}>
        {/* Use your own heading with theme colors */}
        <Text style={theme.ui.title}>
          {heading}
        </Text>
        
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </InnerContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "90%",
    margin: "auto"
  },
  description: {
    fontSize: 15,
    fontFamily: "BLANCO",
    textAlign: "center",
    opacity: 0.8,
    maxWidth: 300,
    color: "rgba(255, 215, 0, 0.5)"
  },
});

export default CognitiveHeader;