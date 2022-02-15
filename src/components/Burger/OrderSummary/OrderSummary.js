import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = ({ingredients, price, purchaseCanceled, purchaseContinued}) => {
    const capitalize = {
        textTransform: 'capitalize'
    };
    const ingredientSummary = Object.keys(ingredients)
        .map(igKey => (
            <li key={igKey}>
                <span style={capitalize}>{igKey}</span>: {ingredients[igKey]}
            </li>
        ));
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={purchaseCanceled} btnType="Danger">Cancel</Button>
            <Button clicked={purchaseContinued} btnType="Success">Continue</Button>
        </Aux>
    )
}

export default orderSummary;