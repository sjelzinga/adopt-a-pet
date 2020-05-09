import { Action } from "redux";
import { takeEvery } from "redux-saga/effects";
import { ActionType } from "./globalTypes";
import { getTodo } from "./todo/todoSagas";

/**
 * redux-saga doesn't support enum values by default,
 * so we're changing it to a boolean instead.
 *
 * @param type ActionType to check for.
 */
const patternMap = (type: ActionType) => (action: Action): boolean =>
  action.type === type;

export default function* sagas(): any {
  yield takeEvery(patternMap(ActionType.REQUEST_TODO), getTodo);
}
