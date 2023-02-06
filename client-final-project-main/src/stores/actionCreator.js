import { GET_COURSES, GET_ONE_COURSE } from './actionType';

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
      console.log(data);
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

      console.log(data);
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

// export const loginAction = payload => {
//   return async dispatcher => {
//     try {
//       const res = await fetch(origin + `/admins/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         Swal.fire('Success Login 🎉');
//         localStorage.setItem('access_token', data.access_token);
//         dispatcher(fetchFoodsAction());
//       } else if (!res.ok) {
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Wrong email or password!',
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
