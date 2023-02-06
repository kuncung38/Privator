import { GET_COURSES, GET_ONE_COURSE, GET_BOOKINGS } from './actionType';

const origin = 'http://localhost:3000';

export const fetchCourses = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${origin}/course`);
      const data = await response.json();
      dispatch({
        type: GET_COURSES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOneCourse = id => {
  console.log(id);
  return async dispatch => {
    try {
      const response = await fetch(`${origin}/course/${id}`);
      const data = await response.json();
      dispatch({
        type: GET_ONE_COURSE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerStudent = value => {
  return async dispatch => {
    try {
      const response = await fetch(`${origin}/student/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginStudent = value => {
  return async dispatch => {
    try {
      const response = await fetch(`${origin}/student/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const createBooking = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${origin}/booking/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchBookings = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${origin}/booking`, {
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      const data = await response.json();

      console.log(data);
      dispatch({
        type: GET_BOOKINGS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
