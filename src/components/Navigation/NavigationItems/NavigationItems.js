import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import styles from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Checkout</NavigationItem>
        <NavigationItem link="/auth">Authenticate</NavigationItem>
    </ul>
)

export default navigationItems;