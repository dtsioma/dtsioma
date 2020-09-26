import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import classes from './WordPressRoute.module.css';
import Tech from '../Tech/Tech';

const WordPressRoute = (props) => {
  useEffect(() => {
    props.changeBg()
  }, []);

  const wordpressConfig = {
    techTitle: 'WordPress',
    techDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa tempore cupiditate necessitatibus vel nesciunt repellat dolorem repudiandae expedita similique asperiores officia odit ducimus, hic optio doloribus nemo tempora veritatis, perspiciatis quisquam ut exercitationem, neque assumenda reiciendis. Vero quisquam minima libero, explicabo deleniti reprehenderit, sed eveniet accusamus alias at vel error?`,
  }

  return (
    <div className={classes.WordPressRoute}>
      <Tech {...wordpressConfig} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBg: () => dispatch(actions.changeColorScheme('#444140', '#252423', 'white'))
  }
}

export default connect(null, mapDispatchToProps)(WordPressRoute);