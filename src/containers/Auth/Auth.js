import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './Auth.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity, createInput } from '../../shared/utility';

const auth = () => {
  const [authForm, setAuthForm] = useState({
    email: createInput('input', 'email', 'test@example.com', { isEmail: true }),
    password: createInput('input', 'password', '**********', { minLength: 6 }),
  });
  const [isSignUp, setIsSignup] = useState(true);

  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const authRedirectPath = useSelector(state => state.auth.authRedirectPath);
  const building = useSelector(state => state.burgerBuilder.building);

  const dispatch = useDispatch();
  const onAuth = (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp));
  const onSetAuthRedirectPath = () => dispatch(actions.setAuthRedirectPath('/'));

  useEffect(() => {
    if (!building && authRedirectPath !== '/') {
      onSetAuthRedirectPath();
    }
  }, [building, authRedirectPath, onSetAuthRedirectPath]);

  const inputChangedHandler = (event, inputName) => {
    const updatedAuthForm = updateObject(authForm, {
      [inputName]: updateObject(authForm[inputName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[inputName].validation
        ),
        touched: true,
      }),
    });

    setAuthForm(updatedAuthForm);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onAuth(authForm.email.value, authForm.password.value, isSignUp);
  };

  const switchAuthModeHandler = () => {
    setIsSignup((prev) => !prev);
  };

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key],
    });
  }

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  if (loading) {
    form = <Spinner />;
  }

  let errorMessage = null;
  if (error) {
    errorMessage = <p>{error.message}</p>;
  }

  let authRedirect = null;
  if (isAuthenticated) {
    authRedirect = <Redirect to={authRedirectPath} />;
  }

  return (
    <div className={classes.Auth}>
      {authRedirect}
      {errorMessage}
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType='Success'>Submit</Button>
      </form>
      <Button clicked={switchAuthModeHandler} btnType='Danger'>
        Switch to {isSignUp ? 'Sign In' : 'Sign Up'}
      </Button>
    </div>
  );
};

export default auth;
