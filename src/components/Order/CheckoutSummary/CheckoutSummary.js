import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css'

const checkoutSummary = ({ ingredients, CheckoutCancelled, CheckoutContinued }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes great!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button
        btnType='Danger'
        clicked={CheckoutCancelled}>Cancel</Button>
      <Button
      btnType='Success'
      clicked={CheckoutContinued}>Continue</Button>
    </div>
  );
};

export default checkoutSummary;
