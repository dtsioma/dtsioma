import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import classes from './ReactDev.module.css';
import AboutTitle from '../About/AboutTitle/AboutTitle';

const ReactDev = () => {
  return (
    <div className={classes.ReactDev}>
      <FontAwesomeIcon icon={faReact} className={classes.Icon} />
      <AboutTitle />
    </div>
  );
};

export default ReactDev;