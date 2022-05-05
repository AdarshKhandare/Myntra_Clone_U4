import { LOGIN, LOGIN_FAIL, REGISTER } from "./actiontypes";


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
    case LOGIN:
      return {
        ...state,
        users: payload,
      };
      case LOGIN_FAIL:
        return {
          state
        }
    default:
      return state;
  }
};
export { reducer };
