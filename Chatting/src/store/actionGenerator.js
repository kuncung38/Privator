import { getAllChatrooms } from "../service/firebase";
import { SET_CHATROOM, SET_TARGET, SET_USER } from "./actionType";

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

const setChatroomAction = (payload) => {
    return {
        type: SET_CHATROOM,
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
        console.log(payload, "from generator");
        dispatch(setTargetAction(payload));
    };
};

export const setChatroom = (payload) => {
    return async (dispatch) => {
        dispatch(setChatroomAction(payload));
    };
};
