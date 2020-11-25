import { loginUser, getUserData } from '../../services/user';
import { localStorageUserProp } from '../../constants';

export const userLogIn = userData => {
  return async dispatch => {
    try {
      const user = await loginUser(userData);
      dispatch({
        type: 'LOG_IN',
        user,
      });
    } catch (err) {
      const message = err.response.data.detail;
      alert(message);
    }
  };
};

export const userLogOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

export const initUser = () => {
  return dispatch => {
    const userAsJSON = window.localStorage.getItem(localStorageUserProp);
    if (userAsJSON) {
      const user = JSON.parse(userAsJSON);
      dispatch({
        type: 'INIT_USER',
        user,
      });
    }
  };
};

export const initUserData = clientId => {
  return async dispatch => {
    try {
      const userData = await getUserData(clientId);
      dispatch({
        type: 'INIT_USER_DATA',
        userData,
      });
    } catch (error) {
      if (
        error.config.url === 'http://erp.apptrix.ru/api/clients/token/refresh/'
      ) {
        dispatch(userLogOut());
      }
    }
  };
};
