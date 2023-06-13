import { AUTH_REQUEST_SUCCESS } from "./actions";

const initialState = {
    user: null,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
