import axios from 'axios';
//user: ghtwaychack95@yandex.ru
//password: testingtest
// axios.interceptors.request.use(req => {
//   console.log(req);
//   return req;
// });

// export const registerUser = async fullUserData => {
//   const res = await axios.post(
//     'http://erp.apptrix.ru/api/clients/create/',
//     fullUserData
//   );
//   return res.data;
// };

export const loginUser = async userData => {
  const { data } = await axios.post(
    'http://erp.apptrix.ru/api/clients/token/',
    userData
  );
  return data;
};
