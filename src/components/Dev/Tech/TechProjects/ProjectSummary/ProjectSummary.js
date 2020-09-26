import React from 'react';

import classes from './ProjectSummary.module.css';
import ProjectTitle from './ProjectTitle/ProjectTitle';
import ProjectImage from './ProjectImage/ProjectImage';

const ProjectSummary = () => {
  return (
    <div className={classes.ProjectSummary}>
      <ProjectImage />
      <ProjectTitle>Agro Help</ProjectTitle>
    </div>
  );
};

export default ProjectSummary;