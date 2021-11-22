import React from 'react';
import Routes from './routes';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;