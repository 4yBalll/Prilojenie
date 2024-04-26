import { combineReducers } from 'redux';
import { IP_DATA_RECEIVED } from './actions'; 


const initialIpData = null;


const userReducer = (state = initialIpData, action) => {
  switch (action.type) {
    case IP_DATA_RECEIVED:
      return action.payload; 
    default:
      return state;
  }
};


const initialState = {
  userIpArray: [],
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case IP_DATA_RECEIVED:
      const updatedIp = [...state.userIpArray, action.payload];
      return {
        ...state,
        userIpArray: updatedIp,
      };
    default: 
      return state;
  }
};


const combinedReducer = combineReducers({
  ipData: userReducer, 
  appData: rootReducer, 
});

export default combinedReducer;