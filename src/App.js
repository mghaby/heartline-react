import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Index from './components/Home';
import Settings from './components/Settings';

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
