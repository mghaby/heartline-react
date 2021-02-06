import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
  const initialFromState = {
    username: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialFromState)

  function handleOnChange(event) {
    // console.log('update:', event.target.value)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  
  function handleSubmit() {
    setFormData({
      username: "",
      password: ""
    })
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
        type="text"
        variant="outlined" 
        name="username"
        value={formData.username}
        onChange={handleOnChange}/>
    
      <br/>

      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        name="password"
        value={formData.password}
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
