import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {useGlobalState} from '../utils/stateContext'
import {signOut} from '../services/userServices'

function Nav() {

	const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store


	function handleSignOut(event) {
		event.preventDefault()
		signOut(loggedInUser)
		.then(() => {
      dispatch({type: 'setLoggedInUser', data: null})
      dispatch({type: 'setToken', data: null})
    })
	}

    return(
      <div>
      <h1>Nav</h1>
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
        <Button onClick={handleSignOut}>Sign Out</Button>	
				<h3>{loggedInUser}</h3>
      </div>
    )
}


export default Nav;