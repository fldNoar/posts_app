import React from 'react';
import cl from './DefaultButton.module.scss'

const DefaultButton = ({btnText, ...props}) => {
    return (
        <button {...props} className={[cl.defaultButton, props.className].join(' ')}>
            {btnText}
        </button>
    );
};

export default DefaultButton;