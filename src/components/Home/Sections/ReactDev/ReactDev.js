import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import classes from './ReactDev.module.css';
import Title from '../../../Text/Title/Title';
import GoArrow from '../../GoArrow/GoArrow';
import SectionLink from '../SectionLink/SectionLink';

const ReactDev = (props) => {
  return (
    <div className={classes.ReactDev}>
      <SectionLink to={{pathname: '/react', state: { prevPath: '/' }}} />
      <GoArrow />
      <Title text="React" size="Regular">
        <FontAwesomeIcon icon={faReact} />
      </Title>
    </div>
  );
};

export default ReactDev;