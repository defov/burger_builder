import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import styles from './Burger.module.css';

const burger = ({ingredients}) => {
    let transformedIngredients = Object.keys(ingredients)
        .map(igKey => {
            return [...Array(ingredients[igKey])]
                .map((_, i) => (
                    <BurgerIngredient key={igKey+i} type={igKey} />  
                ));
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
        
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;