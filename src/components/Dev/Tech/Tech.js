import React from 'react';

import classes from './Tech.module.css';
import TechInfo from './TechInfo/TechInfo.js';
import TechProjects from './TechProjects/TechProjects';

const Tech = (props) => {
  return (
    <div className={classes.Tech}>
      <TechInfo title={props.techTitle} description={props.techDescription} />
      <TechProjects />
    </div>
  );
};

export default Tech;