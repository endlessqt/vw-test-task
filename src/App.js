import { useEffect } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogOut, initUser } from './state/actions/user';
import Index from './pages/index';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    //при первом рендере проверяем, если есть значение в локал стораже и если есть то назначем юзера в стейт
    dispatch(initUser());
  }, [dispatch]);

  return (
    <div>
      <div>
        <nav>
          <ul>
            {user ? (
              <li>
                <Link to="/">Index</Link>
              </li>
            ) : null}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>
        {user ? (
          <div>
            <div>{user.username} is logged in</div>
            <button onClick={() => dispatch(userLogOut())}>logout</button>
          </div>
        ) : (
          <div>no user logged in</div>
        )}
      </div>
      <Switch>
        <Route path="/signup">{user ? <Redirect to="/" /> : <Signup />}</Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route>
          <Index path="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
