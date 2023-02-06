import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import { courseReducer } from './reducers/courseReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  course: courseReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
