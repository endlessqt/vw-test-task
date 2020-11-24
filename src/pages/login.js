import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../state/actions/user';

const Login = () => {
  //стейт форм оставляю локальным, поскольку он часто меняется
  //для стейт форм можно было бы использовать ReduxForm, Formik, React Hook Form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(userLogIn({ username, password }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              type="text"
              onChange={({ target }) => setUsername(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </>
  );
};
export default Login;
