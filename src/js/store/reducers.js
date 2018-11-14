import * as Actions from "./actions";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case Actions.SET_NAME:
      return { ...state, name: payload };
    default:
      return state;
  }
};

export default reducer;
