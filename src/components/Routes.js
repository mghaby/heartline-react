import Landing from './Landing';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Index from './Home';
import Settings from './Settings';

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
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/SignIn">SignIn</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/Index">Home</Link>
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
          <Route path='/Settings' component={Settings} />
        </Switch>
      </div>
    </Router>
    )
};


export default Routes;