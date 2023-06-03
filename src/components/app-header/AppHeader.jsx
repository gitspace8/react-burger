import React from 'react';
import moduleStyles from './app-header.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";


const AppHeader = () => {
    return (<header>
        <nav className={moduleStyles.header}>
            <a href="#" className={moduleStyles.constructor}>
                <BurgerIcon type="primary"/>
                <p className={moduleStyles.text}>Конструктор</p>
            </a>
            <a href="#" className={moduleStyles.list}>
                <ListIcon type="secondary"/>
                <p className={moduleStyles.text_type_secondary}>Лента заказов</p>
            </a>
            <div className={moduleStyles.logo}>
                <Logo/>
            </div>
            <a href="#" className={moduleStyles.profile}>
                <ProfileIcon type="secondary"/>
                <p className={moduleStyles.text_type_profile}>Личный кабинет</p>
            </a>
        </nav>
    </header>);
};

export default AppHeader;
