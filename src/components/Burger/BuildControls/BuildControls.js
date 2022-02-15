import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import styles from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = ({ingredientAdded, ingredientRemoved, disabled, price, purchasable, purchase}) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
        {controls.map(({label, type}) => 
            (<BuildControl 
                key={label} 
                label={label}
                added={() => ingredientAdded(type)} 
                removed={() => ingredientRemoved(type)}
                disabled={disabled[type]}
            />)
        )}
        <button 
            disabled={!purchasable} 
            className={styles.OrderButton}
            onClick={() => purchase()}>
            ORDER NOW
        </button>
    </div>
)

export default buildControls;