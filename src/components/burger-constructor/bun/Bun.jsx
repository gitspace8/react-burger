import React from 'react';
import {useSelector} from "react-redux";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {BUN_TYPE} from "../../../utils/config";
import PropTypes from "prop-types";
import moduleStyles from './bun.module.css';
import CustomElement from "../custom-element/CustomElement";

const Bun = ({type}) => {
    const {bun} = useSelector(state => state.burgerConstructor);
    return (<li className={moduleStyles.bun}>
        {bun ? <ConstructorElement
            type={type}
            isLocked={true}
            text={`${bun.name}\n${type === BUN_TYPE.TOP ? '(верх)' : '(низ)'} `}
            thumbnail={bun.image}
            price={bun.price}
        /> : <CustomElement type={type}>Выберите булку</CustomElement>}
    </li>);
}

export default Bun;

Bun.propTypes = {
    type: PropTypes.string.isRequired,
};