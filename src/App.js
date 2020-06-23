import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from './components/UI/Spinner/Spinner';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions';

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
});

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});

const app = () => {

  const isAuthenticated = useSelector(state => state.auth.token !== null);

  const dispatch = useDispatch();
  const onTryAutoSignup = () => dispatch(actions.authCheckState());

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path='/auth' render={(props) => <Auth {...props} />} />
      <Route path='/' exact component={BurgerBuilder} />
      <Redirect to='/' />
    </Switch>
  );
  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/checkout' render={(props) => <Checkout {...props} />} />
        <Route path='/orders' render={(props) => <Orders {...props} />} />
        <Route path='/logout' component={Logout} />
        <Route path='/auth' component={(props) => <Auth {...props} />} />
        <Route path='/' exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>{routes}</Suspense>
    </Layout>
  );
};

export default withRouter(app);
