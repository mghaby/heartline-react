import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './no_user_page/Landing';
import SignIn from './sign_in_page/SignIn';
import SignUp from './sign_up_page/SignUp';
import Index from './user_page/Home';
import Settings from './settings_page/Settings';

function App() {
  return (
    <Router>
			<Nav />
			<Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/SignIn" component={SignIn} /> 
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Index" component={Index} />
        <Route path='/Settings' component={Settings} />
			</Switch>
	  </Router>
  );
}


export default App;
