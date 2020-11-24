import { useState } from 'react';
import { loginUser } from '../services/user';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    const { data: clientData } = await loginUser({ username, password });
    
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


