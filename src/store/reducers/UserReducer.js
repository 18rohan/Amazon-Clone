import { SET_USER, ADD_USER } from "../actions/UserActions.js";

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
    case ADD_USER:
      return {
        ...state,
        CurrentUser: action,
      };
    default:
      return state;
  }
};

export default UserReducer;
