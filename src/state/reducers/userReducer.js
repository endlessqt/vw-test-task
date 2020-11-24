const initialState = {
  access: null,
  client_id: null,
  refresh: null,
  username: null,
};

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'TEST': {
      return {
        ...state,
        test: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
