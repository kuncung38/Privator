import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { courseReducer } from "./reducers/courseReducer";
import { bookingsReducer } from "./reducers/bookingsReducer";
import { reviewReducer } from "./reducers/reviewReducer";
import { instructorReducer } from "./reducers/instructorReducer";
import { userReducer } from "./reducers/userReducer";
import chatroomReducer from "./reducers/chatroomReducer";

const rootReducer = combineReducers({
  courses: courseReducer,
  course: courseReducer,
  bookings: bookingsReducer,
  reviews: reviewReducer,
  instructor: instructorReducer,
  categories: courseReducer,
  user: userReducer,
  selectedChatroom: chatroomReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
