import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const WordPressRoute = (props) => {
  useEffect(() => {
    props.changeBg()
  }, []);

  return (
    <div>
      
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBg: () => dispatch(actions.changeColorScheme('#444140', '#252423', 'white'))
  }
}

export default connect(null, mapDispatchToProps)(WordPressRoute);