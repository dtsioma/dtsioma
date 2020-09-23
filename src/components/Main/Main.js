import React from 'react';
import { Switch, Route } from 'react-router-dom';

import classes from './Main.module.css';
import Home from '../Home/Home';

const Main = () => {
  return (
    <div className={classes.Main}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Main;