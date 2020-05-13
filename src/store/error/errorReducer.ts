import { ActionType } from "store/globalTypes";

const initialState = {
  error: null,
};

const errorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.SET_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
