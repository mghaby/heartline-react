import React from 'react';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useGlobalState} from '../utils/stateContext'
import {signOut} from '../services/userServices'
import {useHistory} from 'react-router-dom'


function Nav() {

	const {store,dispatch} = useGlobalState()
	const {user, loggedInUser} = store;
  let history = useHistory();


	function handleSignOut(event) {
		event.preventDefault()
		signOut(loggedInUser)
		.then(() => {
      dispatch({type: 'setUser', data: {
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
        }})
      dispatch({type: 'setLoggedInUser', data: null})
      dispatch({type: 'setToken', data: null})
    })
    history.push('/')
	}

    if (loggedInUser) {
      return (
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
        <div>
        <Link to="/Home" >Home</Link>
        </div>
        
        <div>
        <Link to="/Settings" >Settings</Link>
        </div>
        
        <Button onClick={handleSignOut}>Sign Out</Button>

				<h3>{loggedInUser && user.username}</h3>
        </Grid>
      ) 
    } else {
        return (
          <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          >
          <div>
          <Link to="/" >Landing</Link>
          </div>
          
          <div>
          <Link to="/SignIn" >SignIn</Link>
          </div>
          
          <div>
          <Link to="/SignUp" >SignUp</Link>
          </div>
          </Grid>
        )
      }
    }

export default Nav;