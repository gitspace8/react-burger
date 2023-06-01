import React from 'react';
import {INGREDIENTS_TITLES} from "../../../utils/config";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import moduleStyles from './ingr-tab.module.css'
import PropTypes from "prop-types";

const IngrTab = ({current, onClick}) => {
    function handleTabClick(e) {
        onClick(e);
    }

    return (<nav className={moduleStyles.tabs}>
            <ul className={moduleStyles.tabs_container}>
                <li>
                    <Tab
                        active={current === INGREDIENTS_TITLES.BUN}
                        value={INGREDIENTS_TITLES.BUN}
                        onClick={handleTabClick}>
                        {INGREDIENTS_TITLES.BUN}
                    </Tab>
                </li>
                <li>
                    <Tab
                        active={current === INGREDIENTS_TITLES.SAUCE}
                        value={INGREDIENTS_TITLES.SAUCE}
                        onClick={handleTabClick}>
                        {INGREDIENTS_TITLES.SAUCE}
                    </Tab>
                </li>
                <li>
                    <Tab
                        active={current === INGREDIENTS_TITLES.MAIN}
                        value={INGREDIENTS_TITLES.MAIN}
                        onClick={handleTabClick}>
                        {INGREDIENTS_TITLES.MAIN}
                    </Tab>
                </li>
            </ul>
        </nav>);
}

export default IngrTab;

IngrTab.propTypes = {
    current: PropTypes.string.isRequired, onClick: PropTypes.func.isRequired,
};
