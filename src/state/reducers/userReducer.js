import { localStorageUserProp } from '../../constants';

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      const user = action.user;
      window.localStorage.setItem(localStorageUserProp, JSON.stringify(user));
      //поскольку налчальный стейт null копировать стейт не приходится, можно вернуть просто новый объект
      return {
        ...user,
      };
    }
    case 'LOG_OUT': {
      window.localStorage.removeItem(localStorageUserProp);
      return (state = null);
    }
    case 'INIT_USER': {
      const user = action.user;
      return {
        ...user,
      };
    }
    default:
      return state;
  }
};

export default reducer;
