import { REDUCER_ACTION_TYPES } from "./constants";

export const Reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case REDUCER_ACTION_TYPES.ADD:
      newState[action.payload.key] = action.payload.data;
      return newState;
    default:
      return state;
  }
};
