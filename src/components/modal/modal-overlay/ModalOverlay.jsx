import React from 'react';
import moduleStyles from './modal-overlay.module.css';
import PropTypes from "prop-types";

const ModalOverlay = ({onClose}) => {
    return (<div className={moduleStyles.overlay} onClick={onClose}></div>);
}

export default ModalOverlay;

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
};
