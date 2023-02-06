import { SET_CHATROOM } from "./actionType";

const initialChatroom = [];

const chatroomReducer = (state = initialChatroom, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_CHATROOM:
            return payload;
        default:
            return state;
    }
};

export default chatroomReducer;
