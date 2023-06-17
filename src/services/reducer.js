import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./reducers/burger-ingredients";
import {burgerConstructorReducer} from "./reducers/burger-constructor";
import {ingredientDetailsReducer} from "./reducers/ingr-details";


export const rootReducer = combineReducers({
    burgerConstructor: burgerConstructorReducer,
    burgerIngredients: burgerIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
})