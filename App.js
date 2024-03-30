import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealSelectionScreen from './screens/MealSelectionScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MealSelection">
        <Stack.Screen name="MealSelection" component={MealSelectionScreen} options={{ title: 'Meal Selection' }} />
        <Stack.Screen name="MealDetails" component={MealDetailsScreen} options={{ title: 'Meal Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
