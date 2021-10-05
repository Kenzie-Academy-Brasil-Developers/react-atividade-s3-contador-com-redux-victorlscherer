import { addNumber, subNumber } from "./actions";

const reducerCounter = (state = 0, action) => {
    switch (action.type) {
        case addNumber:
            return state + action.payload;

        case subNumber:
            return state - action.payload;

        default:
            return state;
    }
}

export default reducerCounter;