import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import classes from './ContactMe.module.css';
import Title from '../../../Text/Title/Title';

const ContactMe = () => {
  return (
    <div className={classes.ContactMe}>
      <FontAwesomeIcon icon={faAngleDoubleRight} className={classes.GoArrow} />
      <Title text="Contact Me" size="Smaller">
        <FontAwesomeIcon icon={faComment} />
      </Title>
    </div>
  );
};

export default ContactMe;