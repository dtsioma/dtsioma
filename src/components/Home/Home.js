import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import classes from './Home.module.css';
import About from './Sections/About/About';
import ReactDev from './Sections/ReactDev/ReactDev';
import WordPressDev from './Sections/WordPressDev/WordPressDev';
import ContactMe from './Sections/ContactMe/ContactMe';

const Home = (props) => {
  useEffect(() => {
    props.changeBg();
  }, []);

  return (
    <div className={classes.Home}>
      <About />
      <ReactDev />
      <WordPressDev />
      <ContactMe />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBg: () => dispatch(actions.changeColorScheme())
  }
}

export default connect(null, mapDispatchToProps)(Home);