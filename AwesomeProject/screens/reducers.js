import { combineReducers } from 'redux';
import { IP_DATA_RECEIVED } from './actions'; 

// Начальное состояние для данных одного пользователя
const initialIpData = null;

// Редьюсер для данных одного пользователя
function userReducer(state = initialIpData, action) {
  switch (action.type) {
    case IP_DATA_RECEIVED:
      return action.payload; // Обновляем данные пользователя
    default:
      return state;
  }
}

// Начальное состояние для корневого редьюсера
const initialState = {
  users: [],
};

// Корневой редьюсер
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case IP_DATA_RECEIVED:
      // Добавляем новые данные пользователя в массив пользователей
      const updatedIp = [...state.users, action.payload];
      return {
        ...state,
        users: updatedIp,
      };
    default: 
      return state;
  }
}

// Комбинированный редьюсер
const combinedReducer = combineReducers({
  currentUser: userReducer, // Редьюсер для текущего пользователя
  appData: rootReducer, // Корневой редьюсер для приложения
});

export default combinedReducer;