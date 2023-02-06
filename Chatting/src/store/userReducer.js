import { SET_USER } from "./actionType";

const initialUser = {};

const userReducer = (state = initialUser, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_USER:
            return payload;
        default:
            return state;
    }
};

export default userReducer;
