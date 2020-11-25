import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initUserData } from '../state/actions/user';

const Index = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initUserData(user.client_id));
  }, []);
  const { userData } = user;
  console.log(userData);
  if (userData) {
    return (
      <div>
        <div>Name: {userData.name}</div>
        <div>Surname: {userData.surname}</div>
        <div>Email: {userData.email}</div>
        <div>uid: {userData.uid}</div>
        <div>username: {userData.username}</div>
        <div>
          Invited By:
          <ul>
            <li>Name: {userData.invited_by.name}</li>
            <li>Surname: {userData.invited_by.surname}</li>
            <li>Email: {userData.invited_by.email}</li>
          </ul>
        </div>
      </div>
    );
  }
  return null;
};

export default Index;
