import React, { useEffect, useReducer } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Index from './components/Home';
import Settings from './components/Settings';
import {StateContext} from './utils/stateContext'
import reducer from './utils/stateReducer'
import {getUser} from './services/userServices'

function App() {

  const initialState = {
    user: null,
    loggedInUser: sessionStorage.getItem('id') || null,
		auth: {token:sessionStorage.getItem('token') || null},
    random: []
  }

  const [store, dispatch] = useReducer(reducer, initialState)
  const {user, loggedInUser} = store

  useEffect(() => {
		getUser(loggedInUser)
		.then((user) => dispatch({type: 'setUser', data: user}))
		.catch((error) => console.log(error));
    console.log('app.user: ', user)
    console.log('app.loggedInUser: ', loggedInUser)
	},[loggedInUser])


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
