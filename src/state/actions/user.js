import { loginUser } from '../../services/user';

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
    const userAsJSON = window.localStorage.getItem('vwTestTaskUser');
    if (userAsJSON) {
      const user = JSON.parse(userAsJSON);
      dispatch({
        type: 'INIT_USER',
        user,
      });
    }
  };
};
