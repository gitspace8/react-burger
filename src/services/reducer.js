import {combineReducers} from "redux";
import {reducer as authReducer} from "./auth/reducer";
import { burgerIngredientsReducer } from "./reducers/burger-ingredients";


export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    auth: authReducer,
})