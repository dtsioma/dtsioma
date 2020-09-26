import React from 'react';
import { Switch, Route } from 'react-router-dom';

import classes from './Main.module.css';
import Home from '../Home/Home';
import ReactRoute from '../Dev/ReactRoute/ReactRoute';
import WordPressRoute from '../Dev/WordPressRoute/WordPressRoute';
import ContactRoute from '../ContactRoute/ContactRoute';

const Main = () => {
  return (
    <div className={classes.Main}>
      <Switch>
        <Route path="/react" component={ReactRoute} />
        <Route path="/wordpress" component={WordPressRoute} />
        <Route path="/contact" component={ContactRoute} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Main;