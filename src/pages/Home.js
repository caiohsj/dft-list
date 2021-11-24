import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

const Home = (props) => {

  return (
    <View style={styles.container}>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});