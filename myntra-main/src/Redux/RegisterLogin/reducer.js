import { LOGIN_FAIL, LOGIN_SUCCESS, REGISTER } from "./actiontypes";

const initState = {
  users: [],
  registerUser: null,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        users: [...state.users, payload],
      };

    default:
      return state;
  }
};
export { reducer };
