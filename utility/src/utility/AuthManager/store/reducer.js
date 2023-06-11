import { AuthTypes } from "./types";

const initialState = {
  isAuth: false,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.refreshToken: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
