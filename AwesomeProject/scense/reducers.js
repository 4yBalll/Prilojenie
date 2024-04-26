// Для создания массива из userData вам нужно изменить reducer, чтобы хранить данные в виде массива.

// reducers.js
import { SAVE_USER_DATA } from './actions';

const initialState = {
    userDataArray: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER_DATA:
            const updatedArray = [...state.userDataArray, action.payload];
            localStorage.setItem('userDataArray', JSON.stringify(updatedArray));
            return {
                ...state,
                userDataArray: updatedArray,
            };
        default:
            return state;
    }
};

export default rootReducer;