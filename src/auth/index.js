import { router } from '../router';

const API_URL = 'http://localhost:3001/';
const LOGIN_URL = `${API_URL}sessions/create/`;
const SIGNUP_URL = `${API_URL}users/`;

export default {
  user: {
    authenticated: false,
  },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token);

      this.user.authenticated = true;

    // Redirect to a specified route
      if (redirect) {
        router.go(redirect);
      }
    }).error((err) => {
      context.error = err;
    });
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token);

      this.user.authenticated = true;

      if (redirect) {
        router.go(redirect);
      }
    }).error((err) => {
      context.error = err;
    });
  },

  logout() {
    localStorage.removeItem('id_token');
    this.user.authenticated = false;
  },

  checkAuth() {
    const jwt = localStorage.getItem('id_token');
    if (jwt) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
  },

  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token'),
    };
  },
};
