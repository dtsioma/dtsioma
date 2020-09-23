import React from 'react';

import classes from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
