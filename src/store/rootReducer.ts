import { combineReducers } from "redux";
import todoReducer from "./todo/todoReducer";
import errorReducer from "./error/errorReducer";

const rootReducer = combineReducers({
  test: () => "test",
  todo: todoReducer,
  error: errorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
