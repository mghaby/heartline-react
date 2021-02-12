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
      dispatch({type: 'setUser', data: null})
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
        <Link to="/Index" >Home</Link>
        <Link to="/Settings" >Settings</Link>
        <Button onClick={handleSignOut}>Sign Out</Button>
				<h3>{user.username || null}</h3>
        </div>
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
          <Link to="/SignIn" >SignIn</Link>
          <Link to="/SignUp" >SignUp</Link>
          </div>
          </Grid>
        )
      }
    }

export default Nav;