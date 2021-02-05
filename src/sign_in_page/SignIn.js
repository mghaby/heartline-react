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

const users = [
  {
    username: "h@gmail.com",
    password: "password"
  },
  {
    username: "ed@gmail.com",
    password: "123456"
  }
]

function SignIn() {
  const classes = useStyles();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // onFormSubmit = (event) => {
  //   event.preventDefault()
  //   const { username, password } = this.state
  //   this.setState({
  //     errorMessage: "",
  //     successMessage: ""
  //   })
  //   const foundUser = users.find((user) => user.username === username)
  //   if (foundUser) {
  //     if (foundUser.password === password) {
  //       this.setState({
  //         successMessage: "User successfully authenicated!"
  //       })
  //     } else {
  //       this.setState({
  //         errorMessage: "Wrong credentials have been entered!"
  //       })
  //     }
  //   } else {
  //     this.setState({
  //       errorMessage: "Wrong credentials have been entered!"
  //     })
  //   }
  // }

  // onInputChange = (event) => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   })
  // }

    return (
    // <div className="container">
    //   {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
    //   {this.state.successMessage && <p>{this.state.successMessage}</p>}
    //   <h2>Login</h2>
    //   <form className="login-form" onSubmit={this.onFormSubmit} >
    //     <label htmlFor="username">Username</label>
    //     <input htmlFor="username" name="username" id="username" value={this.state.username} onChange={this.onInputChange} />
    //     <label htmlFor="password">Password</label>
    //     <input type="password" name="password" id="password" value={this.state.password} onChange={this.onInputChange} />
    //     <input type="submit" value="Submit" id="submit" />
    //   </form>
    // </div>
    <form className={classes.root} noValidate autoComplete="off">
      <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="left">

      <TextField 
      id="outlined-username" 
      label="Username" 
      variant="outlined" />
     
     <br/>

      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          />
          <br/>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
        Submit</Button>
        </Grid>
    </form>
  )
}

export default SignIn;
