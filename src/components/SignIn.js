import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {signIn} from '../services/userServices';
import {useGlobalState} from '../utils/stateContext'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function SignIn() {
  
  const classes = useStyles();
  const initialFormState = {
    username: "",
    password: ""
  }
  const [formState, setFormState] = useState(initialFormState)
  const {dispatch} = useGlobalState()

  function handleOnChange(event) {
    // console.log('update:', event.target.value)
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    signIn(formState)
    .then(({id, jwt}) => {
      sessionStorage.setItem('token', jwt)
      sessionStorage.setItem('id', id)
      dispatch({type: 'setLoggedInUser', data: id})
      dispatch({type: 'setToken', data: jwt})
      useHistory.push('/H')
      console.log('signIn.formState: ', formState)
      console.log('signIn.id: ', id)
      console.log('signIn.jwt: ', jwt)
    })
    .catch((error) => console.log(error))
  }

  return (
    <div>
    <form >
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center">

          <br/>
          <h1>Sign In</h1>
          <br/>

      <TextField 
        id="outlined-username" 
        label="Username" 
        variant="outlined" 
        name="username"
        value={formState.username}
        onChange={handleOnChange}/>
    
      <br/>

      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        name="password"
        value={formState.password}
        onChange={handleOnChange}
        />

      <br/>

      <Button
      variant="contained" 
      size="large" 
      color="primary" 
      className={classes.margin} 
      onClick={handleSubmit}>
      Submit
      </Button>

    </Grid>
  </form >
  </div>
)
}

export default SignIn;
