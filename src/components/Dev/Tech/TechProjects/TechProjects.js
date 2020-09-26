import React from 'react';

import classes from './TechProjects.module.css';
import ProjectSummary from './ProjectSummary/ProjectSummary';

const TechProjects = () => {
  return (
    <div className={classes.TechProjects}>
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default TechProjects;