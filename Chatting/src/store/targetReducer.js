import { SET_TARGET } from "./actionType";

const initialTarget = {};

const targetReducer = (state = initialTarget, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_TARGET:
            return payload;
        default:
            return state;
    }
};

export default targetReducer;
