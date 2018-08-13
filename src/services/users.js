import { SIGN_IN_URL, SIGN_UP_URL } from './urls';

/* global fetch:false */
export default {
  SIGN_IN(payload) {
    return fetch(SIGN_IN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(res => res.json());
  },
  SIGN_UP(payload) {
    return fetch(SIGN_UP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(res => res.json());
  },
};
