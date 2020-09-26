import React from 'react';
import { connect } from 'react-redux';

import classes from './ProjectTitle.module.css';
import Title from '../../../../../Text/Title/Title';

const ProjectTitle = (props) => {
  const projectTitleStyle = {
    backgroundColor: props.bgColor
  }

  return (
    <div className={classes.ProjectTitle} style={projectTitleStyle}>
      <Title text={props.children} bold size="Caption" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bgColor: state.headerBackgroundColor
  }
}

export default connect(mapStateToProps)(ProjectTitle);