import { combineReducers } from "redux";
import animalReducer from "store/animal/animalReducer";
import paginationReducer from "store/pagination/paginationReducer";

const rootReducer = combineReducers({
  animals: animalReducer,
  pagination: paginationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
