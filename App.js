import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'; // Importing the HomeScreen component
import SecondScreen from './SecondScreen'; // Import the SecondScreen component

export default function App() {
  const Stack = createNativeStackNavigator(); // Create a stack for navigation

  // Creates a Navigator stack with two panes
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerTitle: 'Home',
          }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            title: 'Second',
            headerTitle: 'Second',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
