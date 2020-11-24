import { loginUser } from '../../services/user';

// const { data: clientData } = await loginUser({ username, password });

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
