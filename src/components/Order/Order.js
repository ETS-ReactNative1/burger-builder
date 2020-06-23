import React from 'react';

import classes from './Order.module.css';

const order = ({ ingredients, price }) => {
  const ingredientsArray = [];

  for (let name in ingredients) {
    ingredientsArray.push({ name, amount: ingredients[name] });
  }

  const IngredientOutput = ingredientsArray.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          lineHeight: '1em',
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px',
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {IngredientOutput}</p>
      <p>
        Price: <strong>USD ${Number.parseFloat(price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
