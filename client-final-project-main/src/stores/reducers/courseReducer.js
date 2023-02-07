import { GET_COURSES, GET_ONE_COURSE } from "../actionType";

const initalState = {
  courses: [],
  course: {},
};

export const courseReducer = (state = initalState, action) => {
  if (action.type === GET_COURSES) {
    return {
      ...state,
      courses: action.payload,
    };
  } else if (action.type === GET_ONE_COURSE) {
    return {
      ...state,
      course: action.payload,
    };
  } else {
    return state;
  }
};
