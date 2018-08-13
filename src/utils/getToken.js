/* eslint-disable */
export default function () {
  let token = null;
  try {
    token = localStorage.getItem('token');
  } catch (err) {
    console.log('Error ', err);
  }
  if (token) {
    return `Bearer ${token}`;
  }
  return false;
}
/* eslint-enable */
