import React, { useReducer } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Index from './components/Home';
import Settings from './components/Settings';
import {StateContext} from './utils/stateContext'
import reducer from './utils/stateReducer'

function App() {

  const initialState = {
    users: [],
    loggedInUser: null,
		auth: {token: null}
  }

  const [store, dispatch] = useReducer(reducer, initialState)

  

  return (
    <StateContext.Provider value={{store, dispatch}}>
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
    </StateContext.Provider>
    
  );
}


export default App;
