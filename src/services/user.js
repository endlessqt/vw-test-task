import axios from 'axios';
//register is just done ones for not
//user: ghtwaychack95@yandex.ru
//password: testingtest
export const registerUser = async fullUserData => {
  const res = await axios.post(
    'http://erp.apptrix.ru/api/clients/create/',
    fullUserData
  );
  return res.data;
};

export const loginUser = async userData => {
  const { data } = await axios.post(
    'http://erp.apptrix.ru/api/clients/token/',
    userData
  );
  return { data };
};
