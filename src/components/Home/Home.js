import React from 'react';

import classes from './Home.module.css';
import About from './Sections/About/About';
import ReactDev from './Sections/ReactDev/ReactDev';

const Home = () => {
  return (
    <div className={classes.Home}>
      <About />
      {/* <ReactDev /> */}
    </div>
  );
};

export default Home;