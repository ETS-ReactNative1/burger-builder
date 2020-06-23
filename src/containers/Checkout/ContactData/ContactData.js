import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import {
  updateObject,
  checkValidity,
  createInput,
} from '../../../shared/utility';

const contactData = () => {
  const [orderForm, setOrderForm] = useState({
    name: createInput('input', 'text', 'Your Name'),
    street: createInput('input', 'text', 'Street'),
    zip: createInput('input', 'text', 'Zip Code', {
      minLength: 5,
      maxLength: 5,
    }),
    country: createInput('input', 'text', 'Country'),
    email: createInput('input', 'email', 'test@example.com'),
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [
          { value: 'fastest', displayValue: 'Fastest' },
          { value: 'cheapest', displayValue: 'Cheapest' },
        ],
      },
      value: 'fastest',
      validation: {},
      valid: true,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const ings = useSelector(state => state.burgerBuilder.ingredients);
  const price = useSelector(state => state.burgerBuilder.totalPrice);
  const loading = useSelector(state => state.order.loading);
  const token = useSelector(state => state.auth.token);
  const userId = useSelector(state => state.auth.userId);

  const dispatch = useDispatch();
  const onOrderBurger = (orderData, token) => dispatch(actions.purchaseBurger(orderData, token));

  const orderHandler = (e) => {
    e.preventDefault();

    const formData = {};
    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredients: ings,
      price: price,
      orderData: formData,
      userId: userId,
    };

    onOrderBurger(order, token);
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(orderForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        orderForm[inputIdentifier].validation
      ),
      touched: true,
    });
    const updatedOrderForm = updateObject(orderForm, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    setOrderForm(updatedOrderForm);
    setFormIsValid(formIsValid);
  };

  const formElementsArray = [];
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key],
    });
  }
  let form = (
    <form onSubmit={orderHandler}>
      {formElementsArray.map(({ id, config, }) => (
        <Input
          key={id}
          elementType={config.elementType}
          elementConfig={config.elementConfig}
          value={config.value}
          invalid={!config.valid}
          shouldValidate={config.validation}
          touched={config.touched}
          changed={(event) => inputChangedHandler(event, id)}
        />
      ))}
      <Button btnType='Success' disabled={!formIsValid}>
        Order
      </Button>
    </form>
  );
  if (loading) {
    form = <Spinner />;
  }

  return (
    <div className={classes.ContactData}>
      <h4>Enter your contact data</h4>
      {form}
    </div>
  );
};

export default withErrorHandler(contactData, axios);
