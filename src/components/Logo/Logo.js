import React from 'react';

import styles from './Logo.module.css';
import logoPath from '../../assets/images/logo.png';

const logo = () => (
    <div className={styles.Logo} >
        <img src={logoPath} alt="Burger Builder" />
    </div>
);

export default logo;