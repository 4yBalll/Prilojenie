import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Создание Redux store с использованием rootReducer и настройкой middleware
const store = configureStore({
  reducer: rootReducer, // Передаем корневой редьюсер
  middleware: getDefaultMiddleware({
    immutableCheck: false // Отключаем проверку на неизменяемость
  })
});

export default store;
