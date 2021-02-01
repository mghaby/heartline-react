import './App.css';
import Landing from './Landing';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Nav() {
    return(
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SignIn">SignIn</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
        </ul>
        <hr />
        <Switch>
        <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}


export default Nav;