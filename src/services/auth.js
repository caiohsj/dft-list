import http from "../axios";

export default {
  login(credentials) {
    return http.post('/v1/sign_in', credentials);
  },
};
