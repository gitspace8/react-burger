import {ADD_INGR, DELETE_INGR, MOVE_INGR, SET_BUNS,} from "../actions/burger-constructor";

const initialState = {
    ingredients: [],
    bun: null,
};
export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BUNS: {
            return {
                ...state,
                bun: action.bun,
            }
        }
        case ADD_INGR: {
            return {
                ...state,
                ingredients: [action.ingredient, ...state.ingredients],
            }
        }
        case DELETE_INGR: {
            return state;
        }
        case MOVE_INGR: {
            return state;
        }
        default: {
            return state;
        }
    }
};