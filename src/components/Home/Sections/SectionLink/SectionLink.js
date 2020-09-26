import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SectionLink.module.css';

const SectionLink = (props) => {

  
  return (
    <Link to={props.to} className={classes.SectionLink} />
  );
};

export default SectionLink;