import { SET_CHATROOM } from "../actionType";

const initialChat = {};

const chatroomReducer = (state = initialChat, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_CHATROOM:
            return payload;
        default:
            return state;
    }
};

export default chatroomReducer;
