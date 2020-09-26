import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

import classes from './ContactMe.module.css';
import Title from '../../../Text/Title/Title';
import GoArrow from '../../GoArrow/GoArrow';
import SectionLink from '../SectionLink/SectionLink';

const ContactMe = () => {
  return (
    <div className={classes.ContactMe}>
      <SectionLink to={{pathname: '/contact', state: { prevPath: '/' }}} />
      <GoArrow />
      <Title text="Contact Me" size="Smaller">
        <FontAwesomeIcon icon={faComment} />
      </Title>
    </div>
  );
};

export default ContactMe;