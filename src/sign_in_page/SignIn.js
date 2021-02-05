import React, { useEffect, useState } from 'react';
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
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
    const [formData, setFormData] = useState({username: '', password: ''})

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
  // useEffect()
  // onInputChange = (event) => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   })
  // }
    const handleSubmit = () => {
      console.log(formData)
    }


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
    // onSubmit={handleSubmit}
    <form className={classes.root} noValidate autoComplete="off">
      <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="left">

      <TextField 
      id="outlined-username" 
      label="Username" 
      variant="outlined" 
      name="username"
      value={formData.username}
      onChange={(e) => setFormData({...formData, username: e.target.value})}/>
     
     <br/>

      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <br/>
        <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={handleSubmit}>
        Submit</Button>
        </Grid>
    </form >
  )
}

export default SignIn;
