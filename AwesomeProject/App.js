import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNGestureHandlerModule from 'react-native-gesture-handler';
import Authorization from './screens/Authorization'; // Используем правильный путь к компоненту Authorization
import HomeScreen from './screens/HomeScreen'; // Используем правильный путь к компоненту HomeScreen

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Authorization"
          component={Authorization}
          options={{ title: 'Authorization' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


