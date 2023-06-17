import {
    SELECT_INGREDIENT,
    UNSELECT_INGREDIENT,
    OPEN_INGREDIENT_DETAILS_MODAL,
    CLOSE_INGREDIENT_DETAILS_MODAL,
} from "../actions/ingr-details";

const initialState = {
    selectedIngredient: null,
    modalIsOpen: false,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: action.selectedIngredient,
            }
        }
        case UNSELECT_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: null,
            }
        }
        case OPEN_INGREDIENT_DETAILS_MODAL: {
            return {
                ...state,
                modalIsOpen: true,
            }
        }
        case CLOSE_INGREDIENT_DETAILS_MODAL: {
            return {
                ...state,
                modalIsOpen: false,
            }
        }
        default: {
            return state;
        }
    }
};