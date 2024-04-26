import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'; // Импорт Provider из react-redux
import { configureStore } from '@reduxjs/toolkit'; // Импорт configureStore из Redux Toolkit
import rootReducer from './screens/reducers'; // Импорт корневого редьюсера
import Authorization from './screens/Authorization';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

// Создаем Redux store с использованием Redux Toolkit
const reduxStore = configureStore({
  reducer: rootReducer, // Передаем корневой редьюсер
  // Дополнительные параметры конфигурации, если необходимо
});

function App() {
  return (
    <Provider store={reduxStore}>
      {/* Оборачиваем приложение в Provider */}
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
    </Provider>
  );
}

export default App;
