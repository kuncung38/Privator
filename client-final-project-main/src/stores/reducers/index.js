import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import genreReducers from "./reducer/genreReducer";
import movieReducer from "./reducer/movieReduce";

const combineRed = combineReducers({
  movie: movieReducer,
  genre: genreReducers,
});

export const store = createStore(combineRed, applyMiddleware(thunk));
