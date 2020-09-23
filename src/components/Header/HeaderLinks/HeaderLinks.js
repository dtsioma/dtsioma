import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import classes from './HeaderLinks.module.css';


const HeaderLinks = () => {
  return (
    <div className={classes.HeaderLinks}>
      <a href="https://www.linkedin.com/in/dtsioma/" target="_blank" rel="noopener noreferrer" className={classes.Link}>
        <FontAwesomeIcon icon={faLinkedinIn} className={classes.Icon} />
      </a>
      <a href="https://github.com/dtsioma" target="_blank" rel="noopener noreferrer" className={classes.Link}>
        <FontAwesomeIcon icon={faGithub} className={classes.Icon} />
      </a>
    </div>
  );
};

export default HeaderLinks;