import React from 'react';
import Routes from './routes';
import store from './store';
import { Provider } from 'react-redux';
import { RootSiblingParent } from 'react-native-root-siblings';
import ErrorToast from './components/toasts/ErrorToast';

const App = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <ErrorToast />
        <Routes />
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
