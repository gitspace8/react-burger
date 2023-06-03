import React from 'react';
import moduleStyles from './ingr-list.module.css';
import IngrCard from "../ingr-card/./IngrCard";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../utils/constants-prop-types";

const IngrList = ({ingredients, onSelect}) => {

    return (<ul className={`${moduleStyles.list} mt-6 mb-10 ml-4 mr-4`}>
            {ingredients.map((ingredient) => {
                const {_id} = ingredient;
                return (<IngrCard ingredient={ingredient} count={1} key={_id} onSelect={onSelect}/>)
            })}
        </ul>);

}

export default IngrList;

IngrList.propTypes = {
    onSelect: PropTypes.func.isRequired, ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
