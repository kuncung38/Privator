import { GET_REVIEW } from "../actionType";

const initalState = {
  reviews: [],
};

export const reviewReducer = (state = initalState, action) => {
  if (action.type === GET_REVIEW) {
    return {
      ...state,
      reviews: action.payload,
    };
  } else {
    return state;
  }
};
