import React from 'react';
import PropTypes from "prop-types";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import moduleStyles from './constructor-list.module.css';
import {useSelector} from "react-redux";
import ConstructorItem from "../constructor-item/ConstructorItem";

const ConstructorList = ({onDelete}) => {
    const {ingredients} = useSelector(state => state.burgerConstructor);
    return (<div className={`${moduleStyles.container} custom-scroll pr-2`}>
        {ingredients.map((ingredient, index) => {
            const {uuid} = ingredient;
            return (<ConstructorItem key={uuid} ingredient={ingredient} index={index} onDelete={onDelete}/>);
        })}
    </div>);
}
export default ConstructorList;

ConstructorList.propTypes = {
    onDelete: PropTypes.func.isRequired,
};
