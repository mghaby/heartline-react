import Landing from './Landing';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Index from './Index_Page/Index';
import Settings from './Settings_Page/Settings';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Routes() {
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
          <li>
            <Link to="/Index">Index</Link>
          </li>
          <li>
            <Link to="/Settings">Settings</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/SignIn" component={SignIn} /> 
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Index" component={Index} />
          <Route path="/Settings" component={Settings} />
        </Switch>
      </div>
    </Router>
    )
};


export default Routes;