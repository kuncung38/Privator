import {
  GET_CATEGORIES_WITH_COURSE,
  GET_COURSES,
  GET_INSTRUCTOR,
  GET_ONE_CATEGORIES_WITH_COURSE,
  GET_ONE_COURSE,
  GET_ONE_INSTRUCTOR,
} from "../actionType";

const initalState = {
  courses: [],
  course: {},
  instructors: [],
  instructor: {},
  categories: [],
  category: [],
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
  } else if (action.type === GET_CATEGORIES_WITH_COURSE) {
    return {
      ...state,
      categories: action.payload,
    };
  } else if (action.type === GET_ONE_CATEGORIES_WITH_COURSE) {
    return {
      ...state,
      category: action.payload,
    };
  } else if (action.type === GET_INSTRUCTOR) {
    return {
      ...state,
      instructors: action.payload,
    };
  } else if (action.type === GET_ONE_INSTRUCTOR) {
    return {
      ...state,
      instructor: action.payload,
    };
  } else {
    return state;
  }
};
