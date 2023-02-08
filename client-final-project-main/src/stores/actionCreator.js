<<<<<<< HEAD
import { GET_COURSES, GET_ONE_COURSE, GET_BOOKINGS } from "./actionType";

const origin = "http://localhost:3000";
=======
import {
  GET_CATEGORIES_WITH_COURSE,
  GET_COURSES,
  GET_INSTRUCTOR,
  GET_ONE_CATEGORIES_WITH_COURSE,
  GET_ONE_COURSE,
  GET_ONE_INSTRUCTOR,
  GET_BOOKINGS,
} from "./actionType";

// const origin = "https://3ef1-139-228-111-125.ap.ngrok.io";
const origin = "http://localhost:3000";
// const origin = "https://7725-139-228-111-125.ap.ngrok.io";
>>>>>>> main

//? course
export const fetchCourses = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${origin}/course`
        // {
        //   mode: "cors",
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        //   },
        // }
      );
      const data = await response.json();
      console.log(data);
      dispatch({
        type: GET_COURSES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

<<<<<<< HEAD
export const getOneCourse = (id) => {
=======
export const getCategoriesCourse = () => {
>>>>>>> main
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/course/categories`);
      const data = await response.json();
      dispatch({
        type: GET_CATEGORIES_WITH_COURSE,
        payload: data,
      });
      
    } catch (error) {
      console.log(error);
    }
  };
};

<<<<<<< HEAD
export const registerStudent = (value) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/student/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

=======
export const getCategoriesWithCourseById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/course/categories/${id}`);
>>>>>>> main
      const data = await response.json();
      dispatch({
        type: GET_ONE_CATEGORIES_WITH_COURSE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

<<<<<<< HEAD
export const loginStudent = (value) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/student/login`, {
=======
export const getOneCourse = (id) => {
  console.log(id);
  return async (dispatch) => {
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

//? instructor
export const getOneInstructor = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/instructor/${id}`);

      const data = await response.json();
      console.log(data);
      if (data) {
        dispatch({
          type: GET_ONE_INSTRUCTOR,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getInstructors = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/instructor`);

      const data = await response.json();
      if (data) {
        console.log(data);
        dispatch({
          type: GET_INSTRUCTOR,
          payload: data,
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

//? login student
export const registerStudent = (value) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/student/register`, {
>>>>>>> main
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
<<<<<<< HEAD
      localStorage.setItem("access_token", data.access_token);
=======
>>>>>>> main

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

<<<<<<< HEAD
=======
export const loginStudent = (value) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/student/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

//? booking
>>>>>>> main
export const createBooking = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/booking/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
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
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/booking`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
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

//? login instructor
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

export const loginInstructor = (value) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/instructor/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerInstructor = (value) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${origin}/instructor/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
