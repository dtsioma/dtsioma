import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const ContactRoute = (props) => {
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
    changeBg: () => dispatch(actions.changeColorScheme('#F77C93', '#D2697C', 'white'))
  }
}

export default connect(null, mapDispatchToProps)(ContactRoute);