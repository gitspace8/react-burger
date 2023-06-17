import React from 'react';
import moduleStyles from './burger-ingredients.module.css'
import {INGREDIENT_TYPE, INGREDIENTS_TITLES} from "../../utils/config";
import IngrTab from "./ingr-tab/IngrTab";
import Modal from "../modal/Modal";
import IngrList from "./Ingr-list/IngrList";
import IngrDetail from "./ingr-detail/IngrDetail";
import {useDispatch, useSelector} from "react-redux";
import {OPEN_INGR_DETAILS_MODAL, selectIngredient} from "../../services/actions/ingr-details";
import {CHANGE_TAB} from "../../services/actions/burger-ingredients";

const BurgerIngredients = () => {
    const dispatch = useDispatch();
    const { ingredients } = useSelector(state => state.burgerIngredients);

    const bunRef = React.useRef(null);
    const sauceRef = React.useRef(null);
    const mainRef = React.useRef(null);

    const bun = React.useMemo(() => ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.BUN), [ingredients]);
    const sauce = React.useMemo(() => ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.SAUCE), [ingredients]);
    const main = React.useMemo(() => ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.MAIN), [ingredients]);


    function handleTabClick(tab) {
        dispatch({
            type: CHANGE_TAB,
            tab,
        });
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
        console.log(ingredient);
        dispatch(selectIngredient(ingredient));
        dispatch({
            type: OPEN_INGR_DETAILS_MODAL,
        });
    }

    return (<section className={moduleStyles.mainContainer}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <IngrTab current={INGREDIENTS_TITLES.BUN} onClick={handleTabClick}/>
        <div className={`${moduleStyles.ingredientsContainer} custom-scroll mt-10 pr-2`}>
            <p className="text text_type_main-medium" ref={bunRef}>{INGREDIENTS_TITLES.BUN}</p>
            <IngrList ingredients={bun} onSelect={handleIngredientClick}/>
            <p className="text text_type_main-medium" ref={sauceRef}>{INGREDIENTS_TITLES.SAUCE}</p>
            <IngrList ingredients={sauce} onSelect={handleIngredientClick}/>
            <p className="text text_type_main-medium" ref={mainRef}>{INGREDIENTS_TITLES.MAIN}</p>
            <IngrList ingredients={main} onSelect={handleIngredientClick}/>
        </div>
    </section>);
}

export default BurgerIngredients;
