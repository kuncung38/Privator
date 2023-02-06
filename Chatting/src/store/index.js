import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
} from "redux";
import thunk from "redux-thunk";
import chatroomReducer from "./chatroomReducer";
import targetReducer from "./targetReducer";
import userReducer from "./userReducer";

const combined = combineReducers({
    user: userReducer,
    target: targetReducer,
    chatrooms: chatroomReducer,
});

const store = createStore(combined, applyMiddleware(thunk));

export default store;
