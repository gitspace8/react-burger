import React, {useEffect, useState} from 'react';
import moduleStyles from './app.module.css';
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import Margin from "../margin/Margin";

const App = () => {
    const url = 'https://norma.nomoreparties.space/api/ingredients'

    const [state, setState] = useState({
        isLoading: true, hasError: false, ingredients: [],
    })

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(({data}) => setState((prevState) => ({
                ...prevState, isLoading: false, hasError: false, ingredients: data,
            })),)
            .catch(() => setState((prevState) => ({
                ...prevState, isLoading: false, hasError: true,
            })),)
    }, [])

    const {ingredients, isLoading, hasError} = state

    return (<>
        <div className={moduleStyles.main}>
            <AppHeader/>
            {isLoading ? (<h1>Идет загрузка...</h1>) : hasError ? (<h1>Произошла ошибка</h1>) : (
                <div className={moduleStyles.columns}>
                    <BurgerIngredients ingredients={ingredients}/>
                    <Margin/>
                    <BurgerConstructor ingredients={ingredients}/>
                </div>)}
        </div>
    </>)
}
export default App
