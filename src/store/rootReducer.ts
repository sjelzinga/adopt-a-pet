import { combineReducers } from "redux";

const rootReducer = combineReducers({
  test: () => "test",
});

export type appState = ReturnType<typeof rootReducer>;

export default rootReducer;
