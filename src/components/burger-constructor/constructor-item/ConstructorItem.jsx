import {useDispatch} from "react-redux";
import {useRef} from "react";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import moduleStyles from "./constructor-item.module.css"
import {useDrag, useDrop} from "react-dnd";
import {DND_TYPES} from "../../../utils/config";
import {MOVE_INGR} from "../../../services/actions/burger-constructor";
import {ingredientPropTypes} from "../../../utils/constants-prop-types";
import PropTypes from "prop-types";


const ConstructorCard = ({ingredient, index, onDelete}) => {
    const dispatch = useDispatch();
    const {name, price, image, uuid, _id} = ingredient;
    const mainRef = useRef(null);

    const [{isDragging}, dragRef] = useDrag({
        type: DND_TYPES.CARD_FROM_CONSTRUCTOR, item: () => {
            return {uuid, index}
        }, collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: DND_TYPES.CARD_FROM_CONSTRUCTOR, hover: (item, monitor) => {
            if (!mainRef.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = mainRef.current.getBoundingClientRect();
            const clientOffset = monitor.getClientOffset();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            dispatch({
                type: MOVE_INGR, dragIndex: dragIndex, hoverIndex: hoverIndex,
            });
            item.index = hoverIndex;
        }
    });

    dragRef(dropRef(mainRef));

    return (<li className={`${moduleStyles.item} ${isDragging && moduleStyles.item_drag}`} ref={mainRef}>
            <DragIcon type={"primary"}/>
            <ConstructorElement text={name} thumbnail={image} price={price} handleClose={() => onDelete(uuid, _id)}/>
        </li>);
}

export default ConstructorCard

ConstructorCard.propTypes = {
    ingredient: ingredientPropTypes.isRequired, index: PropTypes.number.isRequired, onDelete: PropTypes.func.isRequired,
};