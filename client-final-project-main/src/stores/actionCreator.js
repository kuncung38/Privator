import axios from "axios";
import {
    GET_CATEGORIES_WITH_COURSE,
    GET_COURSES,
    GET_INSTRUCTOR,
    GET_ONE_CATEGORIES_WITH_COURSE,
    GET_ONE_COURSE,
    GET_ONE_INSTRUCTOR,
    GET_BOOKINGS,
    GET_REVIEW,
    LOGIN_ALL_USER,
    SET_USER,
    SET_CHATROOM,
} from "./actionType";

// const origin = "https://3ef1-139-228-111-125.ap.ngrok.io";
const origin = "http://localhost:3000";
// const origin = "https://5a67-139-228-111-125.ap.ngrok.io";

//? course
export const fetchCourses = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `${origin}/course`,
                {
                    headers: {
                        "ngrok-skip-browser-warning": true,
                    },
                }
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

export const getCategoriesCourse = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${origin}/course/categories`, {
                headers: {
                    "ngrok-skip-browser-warning": true,
                },
            });
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

export const addCourse = (value) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${origin}/course`, {
                method: "POST",
                headers: {
                    access_token: localStorage.getItem("access_token"),
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(value),
            });

            dispatch(fetchCourses());
        } catch (error) {
            throw error;
        }
    };
};

export const getCategoriesWithCourseById = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${origin}/course/categories/${id}`, {
                headers: {
                    "ngrok-skip-browser-warning": true,
                },
            });
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

export const getOneCourse = (id) => {
    console.log(id);
    return async (dispatch) => {
        try {
            const response = await fetch(`${origin}/course/${id}`, {
                headers: {
                    "ngrok-skip-browser-warning": true,
                },
            });
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
            const response = await fetch(`${origin}/instructor/${id}`, {
                headers: {
                    "ngrok-skip-browser-warning": true,
                },
            });

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
            const response = await fetch(`${origin}/instructor`, {
                headers: {
                    "ngrok-skip-browser-warning": true,
                },
            });

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
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                    "ngrok-skip-browser-warning": true,
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

export const loginStudent = (value) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${origin}/student/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                    "ngrok-skip-browser-warning": true,
                },
                body: JSON.stringify(value),
            });

            const data = await response.json();
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem(
                "mkdyznbmvkyxzcaryrqkgaxnnjtqltlcnwzuhvlqrlojif",
                data.role
            );

            console.log(data, "lpogoiiimmm");
        } catch (error) {
            console.log(error);
        }
    };
};

//? booking
export const createBooking = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${origin}/booking/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                    "ngrok-skip-browser-warning": true,

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

                    "ngrok-skip-browser-warning": true,
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

export const getReviews = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${origin}/review/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            dispatch({
                type: GET_REVIEW,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const loginInstructor = (value) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${origin}/instructor/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                    "ngrok-skip-browser-warning": true,
                },
                body: JSON.stringify(value),
            });

            const data = await response.json();
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem(
                "mkdyznbmvkyxzcaryrqkgaxnnjtqltlcnwzuhvlqrlojif",
                data.role
            );

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

                    "ngrok-skip-browser-warning": true,
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

//? USER
export const getDashboardInstructor = () => {
    const access_token = localStorage.getItem("access_token");
    return async (dispatch) => {
        try {
            const response = await fetch(`${origin}/instructor/profile`, {
                headers: {
                    access_token: access_token,
                    "ngrok-skip-browser-warning": true,
                },
            });

            const data = await response.json();
            console.log(data, "ini dari action creator getdashboard");
            if (data) {
                dispatch({
                    type: LOGIN_ALL_USER,
                    payload: data,
                });
                console.log(data, "data from instructor dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const getDashboardUser = () => {
    const access_token = localStorage.access_token;
    return async (dispatch) => {
        try {
            const response = await fetch(`${origin}/student/profile`, {
                headers: {
                    access_token: access_token,
                    "ngrok-skip-browser-warning": true,
                },
            });

            const data = await response.json();
            console.log(data);
            if (data) {
                dispatch({
                    type: LOGIN_ALL_USER,
                    payload: data,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

const setUserAction = (payload) => {
    return {
        type: SET_USER,
        payload,
    };
};

export const setUser = () => {
    return async (dispatch) => {
        const role = localStorage.getItem(
            "mkdyznbmvkyxzcaryrqkgaxnnjtqltlcnwzuhvlqrlojif"
        );
        let payload;
        switch (role) {
            case "instructor":
                const responseInstructor = await axios({
                    method: "GET",
                    url: `${origin}/instructor/profile`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                });
                payload = responseInstructor.data;
                console.log(
                    "🚀 ~ file: actionCreator.js:398 ~ return ~ payload",
                    payload
                );
                break;
            case "student":
                const responseStudent = await axios({
                    method: "GET",
                    url: `${origin}/student/profile`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                });
                payload = responseStudent.data;
                console.log(
                    "🚀 ~ file: actionCreator.js:409 ~ return ~ payload",
                    payload
                );
                break;
        }
        dispatch(setUserAction(payload));
    };
};

const setSelectedChatroomAction = (payload) => {
    return {
        type: SET_CHATROOM,
        payload,
    };
};

export const setSelectedChatroom = (payload) => {
    return (dispatch) => {
        dispatch(setSelectedChatroomAction(payload));
    };
};
