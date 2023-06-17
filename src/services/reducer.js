import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./reducers/burger-ingredients";
import {burgerConstructorReducer} from "./reducers/burger-constructor";
import {ingredientDetailsReducer} from "./reducers/ingr-details";
import {orderDetailsReducer} from "./reducers/order-details";


export const rootReducer = combineReducers({
    burgerConstructor: burgerConstructorReducer,
    burgerIngredients: burgerIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer,
})