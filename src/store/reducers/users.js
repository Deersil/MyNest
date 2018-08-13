import { SIGN_IN, SIGN_OUT } from '../../constants';
import getTokenInfo from '../../utils/getTokenInfo';

const initToken = getTokenInfo();
let initFirstName = '';
let initLastName = '';
if (initToken) {
  initFirstName = initToken.fistName || '';
  initLastName = initToken.lastName || '';
}
const initalState = {
  fistName: initLastName,
  lastName: initFirstName,
  isAuthenticated: !!initToken,
};

const users = (state = initalState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default users;
