import { GET_BOOKINGS } from '../actionType';

const initalState = {
  bookings: [],
};

export const bookingsReducer = (state = initalState, action) => {
  if (action.type === GET_BOOKINGS) {
    return {
      ...state,
      courses: action.payload,
    };
  } else {
    return state;
  }
};
