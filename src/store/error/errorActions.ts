import { ActionType } from "store/globalTypes";

// errorActions.js
export function setError(error: any) {
  return {
    type: ActionType.SET_ERROR,
    payload: error,
  };
}
