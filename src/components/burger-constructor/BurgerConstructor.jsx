import React from 'react';
import moduleStyles from './burger-constructor.module.css'
import ConstructorList from "./constructor-list/ConstructorList";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../utils/constants-prop-types";
import OrderDetails from "./order-details/OrderDetails";
import Modal from "../modal/Modal";
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ingredients}) => {

    // вручную выбираем булку, используем useMemo/useCallback что бы кэшировать
    const bunStatic = React.useMemo(() => ingredients.find((ingredient) => ingredient._id === '643d69a5c3f7b9001cfa093c'), [ingredients])
    const {name, price, image} = bunStatic
    // считаем 2 булки статик + все элементы
    let totalCost = (bunStatic.price * 2);
    ingredients.forEach((item) => totalCost += item.price)
    const [isOpen, setIsOpen] = React.useState(false)
    const handleCloseModal = () => {
        setIsOpen(false)
    }
    const handlePlaceOrder = () => {
        setIsOpen(true)
    }
    return (<section className={`${moduleStyles.mainContainer} mt-25`}>
        <ul className={`${moduleStyles.list}`}>
            <li className="ml-8">
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${name} \n(верх)`}
                    thumbnail={image}
                    price={price}
                />
            </li>
            <ConstructorList ingredients={ingredients}/>
            <li className="ml-8">
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${name} \n(низ)`}
                    thumbnail={image}
                    price={price}
                />
            </li>
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
            >
                Оформить заказ
            </Button>
        </div>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <OrderDetails/>
        </Modal>
    </section>)
}

export default BurgerConstructor

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}