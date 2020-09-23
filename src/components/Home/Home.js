import React from 'react';

import classes from './Home.module.css';
import About from './Sections/About/About';
import ReactDev from './Sections/ReactDev/ReactDev';
import WordPressDev from './Sections/WordPressDev/WordPressDev';
import ContactMe from './Sections/ContactMe/ContactMe';

const Home = () => {
  return (
    <div className={classes.Home}>
      <About />
      <ReactDev />
      <WordPressDev />
      <ContactMe />
    </div>
  );
};

export default Home;