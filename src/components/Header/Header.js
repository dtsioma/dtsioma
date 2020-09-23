import React from 'react';

import classes from './Header.module.css';
import Photo from '../Photo/Photo';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import HeaderLinks from './HeaderLinks/HeaderLinks';

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <Photo width={80} />
      <HeaderTitle />
      <HeaderLinks />
    </div>
  );
};

export default Header;