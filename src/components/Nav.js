import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
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
      </div>
    )
}


export default Nav;