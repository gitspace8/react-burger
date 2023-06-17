export function customMiddleware(store) {
    return (next) => (action) => {

        //  Использую customMiddleware для отладки и тестов

        console.log(action)

        // кусок примера с синка от тренера

        //console.log("store after dispatch", store);
        //console.log("will dispatch", action);
        //console.log("dispatch ", next);

        // if (action.type === ADD_TASK && action.payload.content.includes("1")) {
        //   alert("NO NUMBERS IN TEXT!!!!!!!!!!!!!");
        //   //store.dipatch()
        //   //store.getState()
        //   return;
        // }
        //
        // if (typeof action === "function") {
        //     action(store.dispatch, store.getState);
        //     return;
        // }

        return next(action);
    };

}
