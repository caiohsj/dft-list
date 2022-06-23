import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';

const ErrorToast = (props) => {

  useEffect(() => {
    if (props.visible) {
      const toast = Toast.show(props.messages[0], {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onShow: () => {},
        onShown: () => {},
        onHide: () => {},
        onHidden: () => {},
      });

      setTimeout(function () {
        props.dispatch({ type: 'REMOVE_ERROR'})
        Toast.hide(toast);
      }, 2000);
    }
  }, [props.visible]);

  return (
    <></>
  );
};

function mapStateToProps(state) {
  const { error } = state;
  return error;
}

export default connect(mapStateToProps)(ErrorToast);
