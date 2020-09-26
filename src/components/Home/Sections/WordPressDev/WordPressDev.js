import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

import classes from './WordPressDev.module.css';
import Title from '../../../Text/Title/Title';
import GoArrow from '../../GoArrow/GoArrow';
import SectionLink from '../SectionLink/SectionLink';

const WordPressDev = (props) => {
  return (
    <div className={classes.WordPressDev}>
      <SectionLink to={{pathname: '/wordpress', state: { prevPath: '/' }}} />
      <GoArrow />
      <Title text="WordPress" size="Smaller">
        <FontAwesomeIcon icon={faWordpress} className={classes.Icon} />
      </Title>
    </div>
  );
};

export default WordPressDev;