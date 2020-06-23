import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../../store/actions';

const logout = () => {

  const dispatch = useDispatch();
  const onLogout = () => dispatch(actions.logout());

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to='/' />;
};

export default logout;
