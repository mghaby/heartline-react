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
    user: sessionStorage.getItem('user') || null,
    loggedInUser: sessionStorage.getItem('id') || null,
		auth: {token:sessionStorage.getItem('token') || null},
    random: sessionStorage.getItem('random') || null
  }

  // {username: "testing1", goal_weight: 100, weight: 120, age: 20}, {username: "test2", goal_weight: 101, weight: 121, age: 21}
  const [store, dispatch] = useReducer(reducer, initialState)
  const {user, loggedInUser, random} = store

  useEffect(() => {
		getUser(loggedInUser)
		.then((data) => {
      sessionStorage.setItem('user', data)})
		.catch((error) => console.log(error));
    console.log('app.user: ', user)
    console.log('app.loggedInUser: ', loggedInUser)
  },[loggedInUser])

  useEffect(() => {
    getRandom()
    .then((data) => {
    sessionStorage.setItem('random', data[0])
    dispatch({type: 'addRandom', data: data[0]})
    console.log('app.random.data: ', data[0])
    // dispatch({type: 'addRandom', data: data[0]})
    // console.log('weightlog.data: ' , data)
    console.log('app.getrandom.random: ', random[0])
})
    // console.log('weightlog.data:', data[0])})
    .catch((error) => console.log(error))
    },[])

  useEffect(() => {
    console.log('app.random: ', random)
  }, [random])

  // console.log('app.random: ', random)

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
