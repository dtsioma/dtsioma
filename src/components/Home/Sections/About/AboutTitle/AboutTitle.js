import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

import classes from './AboutTitle.module.css';

const AboutTitle = () => {
  return (
    <div className={classes.AboutTitle}>
      <FontAwesomeIcon icon={faUserAstronaut}/>
      <span className={classes.Text}>Who I am</span>
    </div>
  );
};

export default AboutTitle;