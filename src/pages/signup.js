import { useState } from 'react';
import { registerUser } from '../services/user';
const Signup = () => {
  //предпочитаю не использовать редакс для стейта форм, поскольку в формах стейт часто меняется
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invitedBy, setInvitedBy] = useState('RU-637164');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [countryCode, setCountyCode] = useState('RU');

  const handleRegistration = e => {
    e.preventDefault();
    console.log({
      email,
      password,
      name,
      surname,
      countryCode,
      invitedBy,
    });
    setEmail('');
    setPassword('');
    setName('');
    setSurname('');
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
            <input disabled value={countryCode} />
          </label>
        </div>
        <button type="submit">register me!</button>
      </form>
    </>
  );
};

export default Signup;

// password :
// testingtest

/* 
Crete req
HTTP 201 Created
Allow: POST, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "user": {
        "email": "ghtwaychack95@yandex.ru",
        "is_active": false
    },
    "client_id": "RU-344470",
    "phone": null,
    "invited_by": "RU-637164",
    "name": "Anton",
    "surname": "Martynov",
    "country": 1
}
*/
