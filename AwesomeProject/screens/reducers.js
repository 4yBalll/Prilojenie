import { combineReducers } from 'redux';
import { IP_DATA_RECEIVED } from './actions'; 

// Начальное состояние для данных одного пользователя
const initialIpData = null;

// Редьюсер для данных одного пользователя
const userReducer = (state = initialIpData, action) => {
  switch (action.type) {
    case IP_DATA_RECEIVED:
      return action.payload; // Обновляем данные пользователя
    default:
      return state;
  }
};

// Начальное состояние для корневого редьюсера
const initialState = {
  userIpArray: [],
};

// Корневой редьюсер
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case IP_DATA_RECEIVED:
      // Добавляем новые данные пользователя в массив пользователей
      const updatedIp = [...state.userIpArray, action.payload];
      return {
        ...state,
        userIpArray: updatedIp,
      };
    default: 
      return state;
  }
};

// Комбинированный редьюсер
const combinedReducer = combineReducers({
  ipData: userReducer, // Редьюсер для текущего пользователя
  appData: rootReducer, // Корневой редьюсер для приложения
});

export default combinedReducer;