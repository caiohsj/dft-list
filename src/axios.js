import axios from 'axios';
import store from './store';
import { locale } from './locales';

const baseConfig = {
  baseURL: 'http://10.0.2.2:8000/public/api',
};

const instance = axios.create(baseConfig);

instance.interceptors.request.use(
  (config) => {
    const { common } = config.headers;
    config.data.locale = locale;

    const currentUser = store.getState().auth;
    if (currentUser && currentUser.api_token) {
      common.AUTHORIZATION = currentUser.api_token;
      common['Cache-Control'] = 'no-cache';
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    store.dispatch({
      type: 'SET_ERROR',
      payload: {
        visible: true,
        messages: error.response.data,
      },
    });
    return Promise.reject(error);
  }
);

export default instance;