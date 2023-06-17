import React from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import moduleStyles from './ingr-card.module.css';
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../utils/constants-prop-types";
import {useDrag} from "react-dnd";
import {DND_TYPES} from "../../../utils/config";

const IngrCard = ({ingredient, onSelect}) => {
    const {image, price, name, quantity} = ingredient;
    const [, dragRef] = useDrag({
        type: DND_TYPES.CARD_FROM_INGREDIENTS,
        item: ingredient,
    });
    return (<li className={moduleStyles.card} onClick={() => onSelect(ingredient)} ref={dragRef}>
        <figure className={moduleStyles.card_container}>
            <img className="ml-4 mr-4" src={image} alt={name}/>
            <figcaption className={moduleStyles.caption_container}>
                <div className={`${moduleStyles.price_container} mt-1 mb-1`}>
                    <p className="text text_type_digits-default">{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`text text_type_main-default ${moduleStyles.title}`}>{name}</p>
            </figcaption>
            {!!quantity && <Counter count={quantity} size="default"/>}
        </figure>
    </li>);
}
export default IngrCard;
IngrCard.propTypes = {
    onSelect: PropTypes.func.isRequired, ingredient: ingredientPropTypes.isRequired
};