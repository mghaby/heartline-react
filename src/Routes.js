import Landing from './no_user_page/Landing';
import SignIn from './sign_in_page/SignIn';
import SignUp from './sign_up_page/SignUp';
import Index from './user_page/Home';

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
        </ul>

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/SignIn" component={SignIn} /> 
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Index" component={Index} />
        </Switch>
      </div>
    </Router>
    )
};


export default Routes;