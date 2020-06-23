import React from 'react';

import classes from './BuildControls.modules.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = ({
  price,
  ingredientAdded,
  ingredientRemoved,
  disabled,
  purchasable,
  ordered,
  isAuth,
}) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => ingredientAdded(ctrl.type)}
        removed={() => ingredientRemoved(ctrl.type)}
        disabled={disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!purchasable}
      onClick={ordered}
    >
      {isAuth ? 'Order Now' : 'Sign Up to Order'}
    </button>
  </div>
);

export default buildControls;
