import { HOTELS_URL } from './urls';
import getToken from '../utils/getToken';

/* global fetch:false */
export default {
  INIT_HOTELS() {
    return fetch(HOTELS_URL, {
      method: 'GET',
      headers: {
        Authorization: getToken(),
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json());
  },
};
