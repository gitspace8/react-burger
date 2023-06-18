import React from 'react';
import moduleStyles from './order-details.module.css';
import imageFile from '../../../images/image.svg'
import {useSelector} from "react-redux";

const OrderDetails = () => {
    const {orderId} = useSelector(state => state.orderDetails);
    return (

        <div className={`${moduleStyles.container} mt-30 mb-30`}>
            <p className="text text_type_digits-large">{orderId}</p>
            <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
            <img className="mt-15" src={imageFile} alt="Успешно"/>
            <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной
                станции</p>
        </div>

    );
}

export default OrderDetails;
