import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { courseReducer } from "./reducers/courseReducer";
import { bookingsReducer } from "./reducers/bookingsReducer";
import { reviewReducer } from "./reducers/reviewReducer";

const rootReducer = combineReducers({
  courses: courseReducer,
  course: courseReducer,
  bookings: bookingsReducer,
  reviews: reviewReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
