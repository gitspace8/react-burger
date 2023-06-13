import {getRemoteData} from "../../utils/remote-api";
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const CHANGE_TAB = 'CHANGE_TAB';

export function getIngredients() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST,
        });
        getRemoteData()
            .then((res) => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    ingredients: res.data.map(ingredient => ({...ingredient, quantity: 0, customData: 0})),
                })
            })
            .catch(() => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                })
            })
    }
}