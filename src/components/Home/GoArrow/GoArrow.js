import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import classes from './GoArrow.module.css';

const GoArrow = () => {
  return <FontAwesomeIcon icon={faAngleDoubleRight} className={classes.GoArrow} />;
};

export default GoArrow;