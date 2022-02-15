import React from 'react';

import styles from './Button.module.css';

const button = ({children, clicked, btnType, disabled}) => (
    <button 
        onClick={clicked} 
        className={[styles.Button, styles[btnType]].join(' ')}
        disabled={disabled}>
        {children}
    </button>
);

export default button;