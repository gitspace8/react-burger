import {INGREDIENTS_TITLES, INGREDIENT_TYPE} from "../../utils/config";
import {
    CHANGE_TAB,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    INCREASE_INGREDIENT,
    DECREASE_INGREDIENT,
    CHANGE_BUNS,
} from "../actions/burger-ingredients";


const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    tab: INGREDIENTS_TITLES.BUN,
};

export const burgerIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true,
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsFailed: false,
                ingredients: action.ingredients
            };
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsFailed: true,
                ingredients: [],
            }
        }
        case CHANGE_TAB: {
            return {
                ...state,
                tab: action.tab,
            }
        }
        default: {
            return state;
        }
    }
};