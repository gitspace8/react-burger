import React, {useEffect} from 'react';
import moduleStyles from './app.module.css';
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import Margin from "../margin/Margin";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/burger-ingredients";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch]);


    return (<>
        <div className={moduleStyles.main}>
            <AppHeader/>
            <div className={moduleStyles.columns}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients/>
                    <Margin/>
                    <BurgerConstructor/>
                </DndProvider>
            </div>
        </div>
    </>)
}
export default App
