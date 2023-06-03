import React from 'react';
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../utils/constants-prop-types";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import moduleStyles from './constructor-list.module.css';

const ConstructorList = ({ingredients}) => {

    return (<div className={`${moduleStyles.container} custom-scroll pr-2`}>
        {ingredients.map((ingredient, i) => {
            const {name, price, image, _id} = ingredient;
            return (<li className={`${moduleStyles.item}`} key={_id + i}>
                <DragIcon type={"primary"}/>
                <ConstructorElement text={name} thumbnail={image} price={price}/>
            </li>)
        })}
    </div>);
}

export default ConstructorList;

ConstructorList.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
