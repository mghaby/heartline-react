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
    .then(({username, jwt}) => {
      console.log(username, jwt)
      sessionStorage.setItem('token', jwt)
      sessionStroage.setItem('user', username)
      dispatch({type: 'setLoggedInUser', data: username})
      dispatch({type: 'setToken', data: jwt})
      useHistory.push('/Home')
    })
    .catch((error) => console.log(error))
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start">

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
)
}

export default SignIn;
