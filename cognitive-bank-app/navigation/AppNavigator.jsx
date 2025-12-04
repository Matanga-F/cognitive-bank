import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react'
import Welcome from '../screens/Onboarding/Welcome';

const AppNavigator = () => {
  return (
    <NavigationContainer>

        <Stack.Navigator>
            <Stack.Screen
          name="CognitiveDashboard"
          component={Welcome}
          options={{
            animation: 'slide_from_bottom',
            headerShown: false,
          }}
        />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigator
