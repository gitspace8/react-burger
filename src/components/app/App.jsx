import React, {useEffect, useState} from 'react';
import moduleStyles from './app.module.css';
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import Margin from "../margin/Margin";
import {getRemoteData} from "../../utils/remote-api";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/burger-ingredients";

const App = () => {
    const dispatch = useDispatch();

    const testIngredients = useSelector(state => state.ingredients);

    const [state, setState] = useState({
        isLoading: true, hasError: false, ingredients: [],
    })

    const handleRemoteData = () => {
        getRemoteData()
            .then(({data}) => setState((prevState) => ({
                ...prevState, isLoading: false, hasError: false, ingredients: data,
            })),)
            .catch((err) => setState((prevState) => ({
                ...prevState, isLoading: false, hasError: true,
            })),)
    };

    function handleTest() {
        //dispatch({type: TEST_ACTION});
        //dispatch({ type: AUTH_REQUEST_SUCCESS, user: "Test",})
        console.log("test22223");
    }

    useEffect(() => {
        handleRemoteData()
        handleTest()
    }, [])

    React.useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch]);


    const {ingredients, isLoading, hasError} = state

    return (<>
        <div className={moduleStyles.main}>
            <AppHeader/>
            {isLoading ? (<h1>Идет загрузка...</h1>) : hasError ? (<h1>Произошла ошибка</h1>) : (
                <div className={moduleStyles.columns}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients ingredients={ingredients}/>
                        <Margin/>
                        <BurgerConstructor ingredients={ingredients}/>
                    </DndProvider>
                </div>)}
        </div>
    </>)
}
export default App
