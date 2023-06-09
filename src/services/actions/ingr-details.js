export const OPEN_INGREDIENT_DETAILS_MODAL = 'OPEN_INGREDIENT_DETAILS_MODAL';
export const CLOSE_INGREDIENT_DETAILS_MODAL = 'CLOSE_INGREDIENT_DETAILS_MODAL';
export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const UNSELECT_INGREDIENT = 'UNSELECT_INGREDIENT';
export function selectIngredient(ingredient) {
    return {
        type: SELECT_INGREDIENT,
        selectedIngredient: ingredient,
    };
}