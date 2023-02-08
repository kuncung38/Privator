import { LOGIN_INSTRUCTOR } from "../actionType";

const initialState = {
  instructor_login: {},
};

export const instructorReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action, "ini dari action");
  if (type == LOGIN_INSTRUCTOR) {
    return {
      ...state,
      instructor_login: payload,
    };
  } else {
    return state;
  }
};
