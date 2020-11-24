const reducer = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      const user = action.user;
      window.localStorage.setItem('vwTestTaskUser', JSON.stringify(user));
      return {
        ...user,
      };
    }
    default:
      return state;
  }
};

export default reducer;
