import React from 'react';
import moduleStyles from './ingr-detail.module.css';
import {ingredientPropTypes} from "../../../utils/constants-prop-types";


const IngrDetail = ({ingredient}) => {
    const {image_large, name, calories, carbohydrates, fat, proteins} = ingredient;
    return (<figure className={`${moduleStyles.container}`}>
        <img className={`${moduleStyles.image}`} src={image_large} alt={name}/>
        <figcaption className={`${moduleStyles.caption} mt-4`}>
            <p className="text text_type_main-medium mb-8">{name}</p>
            <ul className={`${moduleStyles.table}`}>
                <li className={`${moduleStyles.item}`}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                </li>
                <li className={`${moduleStyles.item}`}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                </li>
                <li className={`${moduleStyles.item}`}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                </li>
                <li className={`${moduleStyles.item}`}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                </li>
                <li className={`${moduleStyles.item}`}>
                    <p className="text text_type_digits-default text_color_inactive">{calories}</p>
                </li>
                <li className={`${moduleStyles.item}`}>
                    <p className="text text_type_digits-default text_color_inactive">{proteins}</p>
                </li>
                <li className={`${moduleStyles.item}`}>
                    <p className="text text_type_digits-default text_color_inactive">{fat}</p>
                </li>
                <li className={`${moduleStyles.item}`}>
                    <p className="text text_type_digits-default text_color_inactive">{carbohydrates}</p>
                </li>
            </ul>
        </figcaption>
    </figure>)
}

export default IngrDetail;

IngrDetail.propTypes = {
    ingredient: ingredientPropTypes.isRequired
};
