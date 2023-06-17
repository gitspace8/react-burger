import {url, url_place_order} from "./config";

const getResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return res.json()
            .then((err) => {
                const error = new Error(err.message);
                error.status = res.status;
                throw error;
            })
    }
};
export const getRemoteData = () => {
    return fetch(url, {})
        .then(getResponse)
};

export const placeOrder = ({ingredients}) => {
    return fetch(url_place_order, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ingredients})
    })
        .then(getResponse)
};
