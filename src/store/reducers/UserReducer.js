import { SET_USER } from "../actions/UserActions.js";

const InitialState = {
  CurrentUser: null,
};
const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        CurrentUser: action.user,
      };
    default:
      return state;
  }
};

export default UserReducer;
