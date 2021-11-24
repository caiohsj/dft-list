import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from '../components/forms/LoginForm';
import { connect } from 'react-redux';
import Auth from '../services/auth';

const Login = (props) => {
  const signIN = (email, password) => {
    Auth.login({ email, password }).then(res => {
      props.dispatch({
        type: 'SET_CURRENT_USER',
        payload: res.data,
      });
    });
  };

  return (
    <View style={styles.container}>
      <LoginForm doLogin={signIN}/>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});