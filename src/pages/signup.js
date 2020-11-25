import { useState } from 'react';
import { registerUser } from '../services/user';
import { useHistory } from 'react-router-dom';
const Signup = () => {
  let history = useHistory();

  //стейт форм оставляю локальным, поскольку он часто меняется
  //для стейтa форм можно было бы использовать ReduxForm, Formik, React Hook Form
  //formstate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invitedBy] = useState('RU-637164');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [countryKey] = useState('RU');
  //formstate

  const handleRegistration = async e => {
    e.preventDefault();
    const userFormData = {
      user: {
        email,
        password,
      },
      name,
      surname,
      country_key: countryKey,
      invited_by: invitedBy,

      //при отсутствии телефона сервер кидает 500 ошибку, поэтому включаю сюда просто пустое поле, на фронте инпута телефона нет
      phone: '',
    };
    try {
      const { status, statusText } = await registerUser(userFormData);
      if (status === 201 && statusText === 'Created') {
        alert('Аккаунт успешно создан');
        history.push('/login');
      }
    } catch (error) {
      const errObject = error.response.data;
      const errEntries = Object.entries(errObject);
      let errorsArray = [];
      errEntries.forEach(entry => {
        if (typeof entry[1] === 'object' && !Array.isArray(entry[1])) {
          const keys = Object.keys(entry[1]);
          keys.forEach(key => {
            const field = key;
            const message = entry[1][key].toString();
            const errorMessage = `${field} : ${message}`;
            errorsArray.push(errorMessage);
          });
        } else {
          const field = entry[0];
          const message = entry[1].toString();
          const errorMessage = `${field} : ${message}`;
          errorsArray.push(errorMessage);
        }
      });
      const errorString = errorsArray.join('\n');
      alert(errorString);
    }
  };

  return (
    <>
      <form onSubmit={handleRegistration}>
        <div>
          <label>
            Email
            <input
              type="email"
              required
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              required
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Invited By
            <input disabled value={invitedBy} />
          </label>
        </div>
        <div>
          <label>
            Name
            <input
              type="text"
              required
              onChange={({ target }) => setName(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Surname
            <input
              type="text"
              required
              onChange={({ target }) => setSurname(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Country Key
            <input disabled value={countryKey} />
          </label>
        </div>
        <button type="submit">register me!</button>
      </form>
    </>
  );
};

export default Signup;


