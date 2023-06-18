import {placeOrder} from "../../utils/remote-api";

export const OPEN_ORDER_DETAILS_MODAL = 'OPEN_ORDER_DETAILS_MODAL';
export const CLOSE_ORDER_DETAILS_MODAL = 'CLOSE_ORDER_DETAILS_MODAL';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILED = 'PLACE_ORDER_FAILED';
export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';

export function placeOrderAction(order) {
    return function (dispatch) {
        dispatch({
            type: PLACE_ORDER_REQUEST,
        });
        placeOrder({ingredients: order})
            .then((res) => {
                dispatch({
                    type: PLACE_ORDER_SUCCESS, orderId: res.order.number.toString(),
                });
                dispatch({
                    type: OPEN_ORDER_DETAILS_MODAL,
                });
            })
            .catch(() => {
                dispatch({
                    type: PLACE_ORDER_FAILED,
                })
            })
    }
}