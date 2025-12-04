import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// Import screens/components
import Welcome from '../screens/Onboarding/Welcome';
import CognitiveAuthentication from '../components/forms/CognitiveAuthentication';
import CognitiveTransactionDemo from '../scripts/CognitiveTransactionDemo'
import CognitiveDashboard from '../components/dashboard/CognitiveDashboard';
import { Alert } from 'react-native';

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
        initialRouteName="Dashboard" // Change this to test different screens
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#581C87',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Welcome/Onboarding Screen */}
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
            animation: 'fade',
          }}
        />

        {/* Authentication Screen */}
        <Stack.Screen
          name="Authentication"
          component={CognitiveAuthentication}
          options={{
            title: 'Login / Register',
            animation: 'slide_from_right',
          }}
        />

        {/* Transaction Component Demo Screen */}
        <Stack.Screen
          name="TransactionDemo"
          component={CognitiveTransactionDemo}
          options={{
            title: 'Transaction Examples',
            animation: 'slide_from_right',
          }}
        />

        {/* Dashboard Screen */}
        <Stack.Screen
          name="Dashboard"
          options={{
            title: 'Cognitive Dashboard',
            headerShown: true,
            animation: 'fade',
          }}
        >
          {(props) => (
            <CognitiveDashboard
              {...props}
              onTransactionPress={handleTransactionPress}
              onViewAllTransactions={handleViewAllTransactions}
              onViewAllAccounts={handleViewAllAccounts}
              onQuickAction={handleQuickAction}
              userName="John Doe"
              showNeuralInsights={true}
              showSpendingCategories={true}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;