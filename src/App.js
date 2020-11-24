import { Switch, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Index from './pages/index';
import Login from './pages/login';
import Signup from './pages/signup';
function App() {
  const user = useSelector(state => state.user);
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
          {user ? <div>user logged in</div> : <div>no user logged</div>}
        </nav>
      </div>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Index path="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
