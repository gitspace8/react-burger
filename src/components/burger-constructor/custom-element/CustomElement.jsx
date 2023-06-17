import PropTypes from "prop-types";
import moduleStyles from './custom-element.module.css';
import {BUN_TYPE} from "../../../utils/config";

const CustomElement = ({type, children}) => {
    const classNames = `${moduleStyles.card} ${type ? type === BUN_TYPE.TOP ? moduleStyles.card_top : moduleStyles.card_bottom : ''}`;
    return (
        <div className={classNames}>
            <p className="text text_type_main-default text_color_inactive">{children}</p>
        </div>
    );
}
export default CustomElement;
CustomElement.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
};