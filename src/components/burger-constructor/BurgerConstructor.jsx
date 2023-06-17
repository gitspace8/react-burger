import React from 'react';
import moduleStyles from './burger-constructor.module.css'
import ConstructorList from "./constructor-list/ConstructorList";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {BUN_TYPE, DND_TYPES, INGREDIENT_TYPE} from "../../utils/config";
import {CHANGE_BUNS, DECREASE_INGREDIENT, INCREASE_INGREDIENT} from "../../services/actions/burger-ingredients";
import {ADD_INGR, DELETE_INGR, SET_BUNS} from "../../services/actions/burger-constructor";
import {v4 as uuid} from "uuid";
import Bun from "./bun/Bun";

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const constructorIngredients = useSelector(state => state.burgerConstructor.ingredients);
    const {bun} = useSelector(state => state.burgerConstructor);

    const [, dropTargetRef] = useDrop({
        accept: DND_TYPES.CARD_FROM_INGREDIENTS, drop(ingredient) {
            handleOnDrop(ingredient);
        }
    });

    function handleOnDrop(ingredient) {
        console.log(ingredient)
        const {_id, type} = ingredient;
        switch (type) {
            case INGREDIENT_TYPE.BUN: {
                dispatch({
                    type: CHANGE_BUNS, _id: _id,
                });
                dispatch({
                    type: SET_BUNS, bun: ingredient,
                });
                break;
            }
            default: {
                dispatch({
                    type: INCREASE_INGREDIENT, _id: _id,
                });
                dispatch({
                    type: ADD_INGR, ingredient: {...ingredient, uuid: uuid()},
                });
                break;
            }
        }
    }

    const totalCost = React.useMemo(() => {
        return constructorIngredients.reduce((acc, cur) => {
            if (cur.price) {
                return acc + cur.price;
            }
            return acc;
        }, 0) + (bun ? 2 * bun.price : 0);
    }, [constructorIngredients, bun]);
    const handlePlaceOrder = () => {
        const order = [bun._id, ...constructorIngredients.map((ingredient) => ingredient._id), bun._id];
        //dispatch();
    }

    function handleDeleteClick(uuid, _id) {
        dispatch({
            type: DELETE_INGR, uuid: uuid,
        });
        dispatch({
            type: DECREASE_INGREDIENT, _id: _id,
        })
    }

    return (<section className={`${moduleStyles.mainContainer} mt-25`} ref={dropTargetRef}>
        <ul className={`${moduleStyles.list}`}>
            {<Bun type={BUN_TYPE.TOP}/>}
            <ConstructorList onDelete={handleDeleteClick}/>
            {bun ? (<Bun type={BUN_TYPE.BOTTOM}/>) : null}
        </ul>
        <div className={`${moduleStyles.container} mt-10 mr-4`}>
        <span className="text text_type_digits-medium mr-10">
          {totalCost} <CurrencyIcon type="primary"/>
        </span>
            <Button
                type="primary"
                size="large"
                htmlType="button"
                onClick={handlePlaceOrder}
                disabled={!bun}
            >
                Оформить заказ
            </Button>
        </div>
    </section>)
}
export default BurgerConstructor