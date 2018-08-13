import { INIT_HOTELS } from '../../constants';

const initalState = {
  list: [],
};

const hotels = (state = initalState, action) => {
  switch (action.type) {
    case INIT_HOTELS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default hotels;
