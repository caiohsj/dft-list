const ListItemReducer = (state = {
  all: [],
  current: null,
}, action) => {
  switch (action.type) {
    case 'SET_LIST_ITEMS':
      return {
        all: action.payload,
        current: state.current,
      };
    case 'SET_CURRENT_LIST_ITEM':
      return {
        all: state.all,
        current: action.payload,
      };
    default:
      return state;
  }
};

export default ListItemReducer;