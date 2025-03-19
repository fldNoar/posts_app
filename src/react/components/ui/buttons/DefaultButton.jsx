import React from 'react';
import cl from './DefaultButton.module.scss'

const DefaultButton = ({btnText, ...props}) => {
    return (
        <button {...props} className={cl.defaultButton}>
            {btnText}
        </button>
    );
};

export default DefaultButton;