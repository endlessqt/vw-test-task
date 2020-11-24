import { useEffect } from 'react';
import { getUserData } from '../services/user';
import { useSelector, useDispatch } from 'react-redux';
const Index = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => getUserData(user.client_id)}>button</button>
    </div>
  );
};
//TODO create action for getting data;

export default Index;
