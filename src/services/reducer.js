import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./reducers/burger-ingredients";
import {burgerConstructorReducer} from "./reducers/burger-constructor";


export const rootReducer = combineReducers({
    burgerConstructor: burgerConstructorReducer,
    burgerIngredients: burgerIngredientsReducer,
})