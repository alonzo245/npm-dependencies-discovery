export default (state, action) => {
  switch (action.type) {
    case "DATA_FETCHED":
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case "RESET_SEARCH":
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
