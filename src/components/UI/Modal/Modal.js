import React, { Fragment } from 'react';

import classes from './Modal.modules.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = ({ show, modalClosed, children }) => (
  <Fragment>
    <Backdrop show={show} clicked={modalClosed} />

    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  </Fragment>
);

export default React.memo(
  modal,
  (prev, next) => next.show === prev.show && next.children === prev.children
);
