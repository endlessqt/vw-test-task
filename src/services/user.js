import axios from 'axios';
import { localStorageUserProp } from '../constants';
const baseURL = 'http://erp.apptrix.ru/api/clients';

axios.interceptors.request.use(
  config => {
    const userAsJSON = localStorage.getItem(localStorageUserProp);
    if (userAsJSON) {
      const user = JSON.parse(userAsJSON);
      const token = user.access;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    } else {
      return config;
    }
  },
  error => Promise.reject(error)
);
axios.interceptors.response.use(
  res => res,
  async error => {
    const errMsgCode = error.response.data.code;
    const errStatus = error.response.status;
    const errConfig = error.config;
    if (errStatus === 401 && errConfig.url === `${baseURL}/token/refresh/`) {
      //here's logic when refresh is not working
      return Promise.reject(error);
    }
    if (
      errMsgCode === 'token_not_valid' &&
      errStatus === 401 &&
      error.response.data.messages[0].token_class === 'AccessToken'
    ) {
      const user = JSON.parse(localStorage.getItem(localStorageUserProp));
      const refreshToken = user.refresh;
      if (refreshToken) {
        const { data } = await axios.post(`${baseURL}/token/refresh/`, {
          refresh: `${refreshToken}`,
        });
        const newAccessToken = data.access;
        const newUser = { ...user, access: newAccessToken };
        window.localStorage.setItem(
          localStorageUserProp,
          JSON.stringify(newUser)
        );
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${newAccessToken}`;

        return axios(errConfig);
      }
    }
    return Promise.reject(error);
  }
);

export const registerUser = async fullUserData => {
  const res = await axios.post(`${baseURL}/create/`, fullUserData);
  return res;
};

export const loginUser = async userData => {
  const { data } = await axios.post(`${baseURL}/token/`, userData);
  return data;
};

export const getUserData = async clientId => {
  const { data } = await axios.get(`${baseURL}/${clientId}`);
  return data;
};
