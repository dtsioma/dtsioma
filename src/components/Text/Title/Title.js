import React from 'react';

import classes from './Title.module.css';

const Title = (props) => {
  const titleClasses = [classes.Title, props.bold ? classes.Bold : null, classes[`Size${props.size}`]];
  
  return (
    <div className={titleClasses.join(' ')}>
      {props.children}
      <span className={classes.Text}>{props.text}</span>
    </div>
  );
};

export default Title;