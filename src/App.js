import React from 'react';
import { connect } from 'react-redux';

import classes from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = (props) => {
  const appStyle = {
    backgroundColor: props.bgColor,
    color: props.textColor
  }

  return (
    <div className={classes.App} style={appStyle}>
      <Header />
      <Main />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bgColor: state.appBackgroundColor,
    textColor: state.appTextColor
  }
}

export default connect(mapStateToProps)(App);
