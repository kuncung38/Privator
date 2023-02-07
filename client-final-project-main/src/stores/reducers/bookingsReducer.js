import { GET_BOOKINGS, GET_ONE_BOOKINGS } from "../actionType";

const initalState = {
  bookings: [],
};

export const bookingsReducer = (state = initalState, action) => {
  if (action.type === GET_BOOKINGS) {
    return {
      ...state,
      courses: action.payload,
    };
  } else if (action.type === GET_ONE_BOOKINGS) {
    return {
      ...state,
      course: action.payload,
    };
  } else {
    return state;
  }
};
