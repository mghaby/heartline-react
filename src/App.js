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
import {getUser, getRandom} from './services/userServices'

function App() {

  const initialState = {
    user: sessionStorage.getItem('user') || {
      username: '',
      password: '',
      password_confirmation: '',
      weight: 65,
      height: 175,
      age: 30,    
      mf: 5,
      activity_level: 1.2,
      goal_weight: 65,
      water: 2000,   
      public: false,
      calories: 0,
      water_count: 0
      },
    loggedInUser: sessionStorage.getItem('id') || null,
		auth: {token:sessionStorage.getItem('token') || null},
    random: sessionStorage.getItem('random') || null
  }

  const [store, dispatch] = useReducer(reducer, initialState)
  const {user, loggedInUser} = store

  useEffect(() => {
		getUser(loggedInUser)
		.then((data) => {
      sessionStorage.setItem('user', data)
      dispatch({type: 'setUser', data: data})
      console.log('app.getUser.data: ', data)
    })
		.catch((error) => console.log(error));
    console.log('app.get.user: ', user)
    console.log('app.get.loggedInUser: ', loggedInUser)
  },[loggedInUser])

  useEffect(() => {
    getRandom()
    .then((data) => {
    sessionStorage.setItem('random', data[0])
    dispatch({type: 'addRandom', data: data[0]})
    })
    .catch((error) => console.log(error))
  },[])

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
