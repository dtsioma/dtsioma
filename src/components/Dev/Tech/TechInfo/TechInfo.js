import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

import classes from './TechInfo.module.css';
import Title from '../../../Text/Title/Title';
import Paragraph from '../../../Text/Paragraph/Paragraph';

const TechInfo = (props) => {
  return (
    <div className={classes.TechInfo}>
      <Title text={props.title} bold size="Regular">
        <FontAwesomeIcon icon={faWordpress} />
      </Title>
      <Paragraph>
        {props.description}
      </Paragraph>
    </div>
  );
};

export default TechInfo;