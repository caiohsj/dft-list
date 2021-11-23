const ErrorReducer = (state = {
  visible: false,
  messages: [],
}, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.payload;
    case 'REMOVE_ERROR':
      return { visible: false, messages: [] };
    default:
      return state;
  }
};

export default ErrorReducer;