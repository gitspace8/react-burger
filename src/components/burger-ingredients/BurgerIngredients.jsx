import React from 'react';
import moduleStyles from './burger-ingredients.module.css'
import {INGREDIENT_TYPE, INGREDIENTS_TITLES} from "../../utils/config";
import IngrTab from "./ingr-tab/IngrTab";
import Modal from "../modal/Modal";
import IngrList from "./Ingr-list/IngrList";
import IngrDetail from "./ingr-detail/IngrDetail";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../utils/constants-prop-types";

const BurgerIngredients = ({ingredients}) => {
    const bunRef = React.useRef(null);
    const sauceRef = React.useRef(null);
    const mainRef = React.useRef(null);

    const bun = React.useMemo(() => ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.BUN), [ingredients]);
    const sauce = React.useMemo(() => ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.SAUCE), [ingredients]);
    const main = React.useMemo(() => ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.MAIN), [ingredients]);

    const [selectedIngredient, setSelectedIngredient] = React.useState(null);
    const [current, setCurrent] = React.useState(INGREDIENTS_TITLES.BUN);

    function handleCloseModal() {
        setSelectedIngredient(null);
    }

    function handleTabClick(tab) {
        setCurrent(tab);
        if (tab === INGREDIENTS_TITLES.MAIN) {
            mainRef.current.scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        }
        if (tab === INGREDIENTS_TITLES.BUN) {
            bunRef.current.scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        }
        if (tab === INGREDIENTS_TITLES.SAUCE) {
            sauceRef.current.scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        }
    }

    function handleIngredientClick(ingredient) {
        setSelectedIngredient(ingredient);
    }

    return (<section className={moduleStyles.mainContainer}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <IngrTab current={current} onClick={handleTabClick}/>
        <div className={`${moduleStyles.ingredientsContainer} custom-scroll mt-10 pr-2`}>
            <p className="text text_type_main-medium" ref={bunRef}>{INGREDIENTS_TITLES.BUN}</p>
            <IngrList ingredients={bun} onSelect={handleIngredientClick}/>
            <p className="text text_type_main-medium" ref={sauceRef}>{INGREDIENTS_TITLES.SAUCE}</p>
            <IngrList ingredients={sauce} onSelect={handleIngredientClick}/>
            <p className="text text_type_main-medium" ref={mainRef}>{INGREDIENTS_TITLES.MAIN}</p>
            <IngrList ingredients={main} onSelect={handleIngredientClick}/>
        </div>
        {selectedIngredient ? (<Modal title='Детали ингредиента' isOpen={true} onClose={handleCloseModal}>
            <IngrDetail ingredient={selectedIngredient}/>
        </Modal>) : null}
    </section>);
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
