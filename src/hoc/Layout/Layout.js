import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const isAuthenticated = useSelector(state => state.auth.token !== null);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prev) => !prev);
  };

  return (
    <Fragment>
      <Toolbar
        isAuth={isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={isAuthenticated}
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{children}</main>
    </Fragment>
  );
};

export default layout;
