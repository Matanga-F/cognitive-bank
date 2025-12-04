import {
  StyleSheet,
  View,
} from 'react-native';
import { useTheme } from "../../../theme/ThemeProvider";
import CognitiveFooter from "../../Card/CognitiveFooter";
import CognitiveHeader from "../../Card/CognitiveHeader";
import CognitiveButton from  "../../common/CognitiveButton";
import CognitiveInput from '../../common/CognitiveInput'

const Landing = () => {
  const { theme, mode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      
      {/* HEADER */}
      <CognitiveHeader
        heading="Cognitive Banking"
        description="Intelligent Banking • Secure Future • Affirmative Present"
      />
      <CognitiveInput
        label="Password"
        placeholder="Enter password"
        secure={true}
        value={"Password"}
        onChangeText={"Password"}
        />

    
      {/* FOOTER */}
      <CognitiveFooter
        support="Cognitive"
        organization="Intelligence"
      />

    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
});
