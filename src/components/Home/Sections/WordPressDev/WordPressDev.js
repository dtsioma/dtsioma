import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import classes from './WordPressDev.module.css';
import Title from '../../../Text/Title/Title';

const WordPressDev = () => {
  return (
    <div className={classes.WordPressDev}>
      <FontAwesomeIcon icon={faAngleDoubleRight} className={classes.GoArrow} />
      <Title text="WordPress" size="Smaller">
        <FontAwesomeIcon icon={faWordpress} className={classes.Icon} />
      </Title>
    </div>
  );
};

export default WordPressDev;