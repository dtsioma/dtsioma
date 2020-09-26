import React from 'react';

import classes from './ProjectImage.module.css';
import projectImage from '../../../../../../assets/images/agro-help.png';

const ProjectImage = () => {
  return (
    <div className={classes.ProjectImage}>
      <img src={projectImage} alt="Agro Help" />
    </div>
  );
};

export default ProjectImage;