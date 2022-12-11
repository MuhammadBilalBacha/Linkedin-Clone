const initialState = {
  user: null,
  isLoading: false,
  login: true,
  error: null,
};
export const reducerState = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "USER_LOGGED_IN": {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        login: false,
      };
    }
    case "ERROR": {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        login: true,
      };
    }
    case "logout": {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};
