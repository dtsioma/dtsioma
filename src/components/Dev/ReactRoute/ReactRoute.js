import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const ReactRoute = (props) => {
  console.log(props);
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
    changeBg: () => dispatch(actions.changeColorScheme('#61DBFB', '#4DABC3', 'white'))
  }
}

export default connect(null, mapDispatchToProps)(ReactRoute);