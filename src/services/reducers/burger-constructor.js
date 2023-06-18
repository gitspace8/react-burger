import {ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT, SET_BUNS,} from "../actions/burger-constructor";

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
        case ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: [action.ingredient, ...state.ingredients],
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients].filter((ingredient) => ingredient.uuid !== action.uuid)
            }
        }
        case MOVE_INGREDIENT: {
            const newIngredients = [...state.ingredients];
            [ newIngredients[action.dragIndex], newIngredients[action.hoverIndex] ] = [ newIngredients[action.hoverIndex], newIngredients[action.dragIndex] ];
            return {
                ...state,
                ingredients: newIngredients,
            }
        }
        default: {
            return state;
        }
    }
};