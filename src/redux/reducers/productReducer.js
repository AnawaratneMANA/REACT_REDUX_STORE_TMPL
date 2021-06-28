/**
 * Reducer always define the initial state and the action.
 **/

import {ActionTypes} from "../contants/action-types";

/**
 * Creating a Initial State.
 **/
const initialState = {
    products: [{
        id: 1,
        title: "Akash",
        category: "Programming",
    }]
}

export const productReducer = (state, {type, payload}) => {
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            break;
    }
}
