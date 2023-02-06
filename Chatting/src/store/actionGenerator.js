import { SET_TARGET, SET_USER } from "./actionType";

const setUserAction = (payload) => {
    return {
        type: SET_USER,
        payload,
    };
};

const setTargetAction = (payload) => {
    return {
        type: SET_TARGET,
        payload,
    };
};

export const setUser = (payload) => {
    return (dispatch) => {
        dispatch(setUserAction(payload));
    };
};

export const setTarget = (payload) => {
    return (dispatch) => {
        dispatch(setTargetAction(payload));
    };
};
