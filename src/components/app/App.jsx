import React, {useEffect} from 'react';
import moduleStyles from './app.module.css';
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import Margin from "../margin/Margin";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/burger-ingredients";
import Modal from "../modal/Modal";
import IngrDetail from "../burger-ingredients/ingr-detail/IngrDetail";
import {CLOSE_INGR_DETAILS_MODAL, UNSELECT_INGREDIENT} from "../../services/actions/ingr-details";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import {CLOSE_ORDER_DETAILS_MODAL} from "../../services/actions/order-details";
import OrderDetails from "../burger-constructor/order-details/OrderDetails";

const App = () => {
    const dispatch = useDispatch();
    const ingredientDetailsModal = useSelector(state => state.ingredientDetails.modalIsOpen);
    const orderDetailsModal = useSelector(state => state.orderDetails.modalIsOpen);

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch]);

    function handleCloseIngrDetailsModal() {
        dispatch({type: CLOSE_INGR_DETAILS_MODAL});
        dispatch({type: UNSELECT_INGREDIENT});
    }
    function handleCloseOrderDetailsModal() {
        dispatch({ type: CLOSE_ORDER_DETAILS_MODAL });
    }

    return (<>
        <div className={moduleStyles.main}>
            <AppHeader/>
            <div className={moduleStyles.columns}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients/>
                    <Margin/>
                    <BurgerConstructor/>
                </DndProvider>
            </div>
        </div>
        {
            ingredientDetailsModal && (
                <Modal onClose={handleCloseIngrDetailsModal} title={'Детали ингредиента'}>
                    <IngrDetail/>
                </Modal>
            )
        }
        {
            orderDetailsModal && (
                <Modal onClose={handleCloseOrderDetailsModal}>
                    <OrderDetails />
                </Modal>
            )
        }
    </>)
}
export default App
