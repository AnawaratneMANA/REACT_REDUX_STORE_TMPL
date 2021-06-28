/**
 * We will have multiple reducer created sometimes when developing with redux.
 * This file is used to combine all those reducers together.
 * **/

import {combineReducers} from 'redux';
import { productReducer} from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
})
