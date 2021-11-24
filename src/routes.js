import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

const Routes = (props) => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.currentUser == null ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'My App Name' }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  const { auth } = state;
  return { currentUser: auth };
};

export default connect(mapStateToProps)(Routes);