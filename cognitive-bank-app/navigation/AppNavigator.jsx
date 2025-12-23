import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// Import screens/components
import Welcome from '../screens/Onboarding/Welcome';
import CognitiveLogin from "../screens/Auth/CognitiveLogin"
import CognitiveRegister from '../screens/Auth/CognitiveRegister';
import CognitiveDashboard from "../screens/Main/CognitiveDashboard"
import { Alert } from 'react-native';
import WelcomeScreen from '../screens/Onboarding/Welcome';

const Stack = createNativeStackNavigator();

// Event handlers for dashboard
const handleTransactionPress = (transactionId) => {
  Alert.alert('Transaction Pressed', `ID: ${transactionId}`);
};

const handleViewAllTransactions = () => {
  Alert.alert('View All', 'Show all transactions');
};

const handleViewAllAccounts = () => {
  Alert.alert('Accounts', 'Manage accounts');
};

const handleQuickAction = (action) => {
  Alert.alert('Quick Action', `Action: ${action}`);
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#8c2505ff',
          },
          headerTintColor: '#f3e2e2ff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Welcome/Onboarding Screen */}
        {/* <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
            animation: 'fade',
          }}
        /> */}
        {/* <Stack.Screen
          name="CognitiveLogin"
          component={CognitiveLogin}
          options={{
            headerShown: false,
            animation: 'fade',
          }}
        /> */}
        <Stack.Screen
          name="CognitiverRegister"
          component={CognitiveRegister}
          options={{
            headerShown: false,
            animation: 'fade',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;