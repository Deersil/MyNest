import { SIGN_IN, SIGN_OUT } from '../../constants/';
import services from '../../services/users';

function signIn(payload) {
  const { token } = payload;
  if (token) {
    /* eslint-disable */
    localStorage.setItem('token', token);
    /* eslint-enable */
  }
  return {
    type: SIGN_IN,
    payload,
  };
}

export function signOut() {
  /* eslint-disable */
  localStorage.clear();
  /* eslint-enable */
  return {
    type: SIGN_OUT,
  };
}


export function signInAsync(payload) {
  return (dispatch) => {
    services.SIGN_IN(payload)
      .then((data) => {
        dispatch(signIn(data));
      });
  };
}
export function signUpAsync(payload) {
  return (dispatch) => {
    services.SIGN_UP(payload)
      .then((token) => {
        dispatch(signIn(token));
      });
  };
}
export default signInAsync;
