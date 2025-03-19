import React from 'react';
import cl from './DefaultInput.module.scss'

const DefaultInput = (props) => {
    return (
        <input {...props} className={cl.defaultInput}/>
    );
};

export default DefaultInput;