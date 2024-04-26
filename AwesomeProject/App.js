import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'; 
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from './screens/reducers'; 
import Authorization from './screens/Authorization';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();


const reduxStore = configureStore({
  reducer: rootReducer, 
  
});

const App = () => {
  return (
    <Provider store={reduxStore}>
      {/* Оборачиваем приложение в Provider */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Authorization">
          <Stack.Screen
            name="Authorization"
            component={Authorization}
            options={{ title: 'Authorization' }}
          />
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }} // мб убрать
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
