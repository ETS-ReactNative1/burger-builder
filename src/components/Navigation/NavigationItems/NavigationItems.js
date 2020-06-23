import React from 'react';

import classes from './NavigationItems.modules.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuthenticated }) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact>Burger Builder</NavigationItem>
    {isAuthenticated && <NavigationItem link='/orders'>Orders</NavigationItem>}
    {!isAuthenticated 
      ? <NavigationItem link='/auth'>Login</NavigationItem>
      : <NavigationItem link='/logout'>Logout</NavigationItem>}
    
  </ul>
);

export default navigationItems;
