import {rootReducer} from "./reducer";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

export const configureStore = (initialState) => {
    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
    return store;
};