import getToken from './getToken';
import decodeJWT from './decodeJWT';

export default function getTokenInfo() {
  const token = getToken();
  if (token) {
    const decoded = decodeJWT(token);
    return decoded || false;
  }
  return false;
}
