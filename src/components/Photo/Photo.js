import React from 'react';

import classes from './Photo.module.css';

import circlePhoto from '../../assets/images/photo-circle.png';

const Photo = (props) => {
  return (
    <div className={classes.Photo}>
      <img src={circlePhoto} alt="Daniil Tsioma" style={{width: props.width + 'px'}}/>
    </div>
  );
};

export default Photo;