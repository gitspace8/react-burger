import React, {useEffect} from 'react';
import {KEY} from "../../utils/config";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import moduleStyles from './modal.module.css';
import ModalOverlay from "./modal-overlay/ModalOverlay";
import PropTypes from "prop-types";
import {createPortal} from "react-dom";

const modalRoot = document.getElementById("react-modals");

const Modal = ({children, title, isOpen, onClose}) => {

    const handleEscClose = (e) => {
        if (e.key === KEY) {
            onClose();
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        }
    }, [onClose]);

    return createPortal(<div className={`${moduleStyles.modal} ${isOpen && moduleStyles.modal_opened}`}>
        <div className={moduleStyles.container}>
            {!!title && (<div className={`${moduleStyles.title} pt-10 ml-10 mr-10`}>
                <h2 className={`text text_type_main-large`}>{title}</h2>
            </div>)}
            {children}
            <button
                className={`${moduleStyles.button} mr-10 mt-15`}
                type="button"
                aria-label="Закрыть"
                onClick={onClose}
            >
                <CloseIcon type="primary"/>
            </button>
        </div>
        <ModalOverlay onClose={onClose}/>
    </div>, modalRoot);

}

export default Modal;

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
