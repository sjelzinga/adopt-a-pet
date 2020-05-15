import { combineReducers } from "redux";
import animalReducer from "store/animal/animalReducer";

const rootReducer = combineReducers({
  animals: animalReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
