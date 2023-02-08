import { LOGIN_ALL_USER } from "../actionType";

const initialState = {
    user_login: {},
};

export const instructorReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(action, "ini dari action");
    if (type == LOGIN_ALL_USER) {
        return {
            ...state,
            user_login: payload,
        };
    } else {
        return state;
    }
};
