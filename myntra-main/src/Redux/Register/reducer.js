import { REGISTER } from "./actiontypes";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER: {
      return state.users;
    }
  }
};
