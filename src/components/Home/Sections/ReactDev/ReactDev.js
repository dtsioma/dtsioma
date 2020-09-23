import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import classes from './ReactDev.module.css';
import Title from '../../../Text/Title/Title';

const ReactDev = () => {
  return (
    <div className={classes.ReactDev}>
      <FontAwesomeIcon icon={faAngleDoubleRight} className={classes.GoArrow} />
      <Title text="React" size="Regular">
        <FontAwesomeIcon icon={faReact} />
      </Title>
    </div>
  );
};

export default ReactDev;