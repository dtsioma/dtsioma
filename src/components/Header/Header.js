import React from 'react';
import { connect } from 'react-redux';

import classes from './Header.module.css';
import Photo from '../Photo/Photo';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import HeaderLinks from './HeaderLinks/HeaderLinks';

const Header = (props) => {
  console.log(props.bgColor);
  const headerStyle = {
    backgroundColor: props.bgColor
  }

  return (
    <div className={classes.Header} style={headerStyle}>
      <Photo />
      <HeaderTitle />
      <HeaderLinks />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bgColor: state.headerBackgroundColor
  }
}

export default connect(mapStateToProps)(Header);