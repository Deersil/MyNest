import { INIT_HOTELS } from '../../constants/';
import services from '../../services/hotels';

function initHotels(payload) {
  return {
    type: INIT_HOTELS,
    payload,
  };
}


export function initHotelsAsync(payload) {
  return (dispatch) => {
    services.INIT_HOTELS(payload)
      .then((data) => {
        dispatch(initHotels(data));
      });
  };
}

export default initHotelsAsync;
