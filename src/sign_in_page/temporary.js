import React from 'react'

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

class SignIn extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: "",
      successMessage: "",
      username: "",
      password: ""
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const { username, password } = this.state
    this.setState({
      errorMessage: "",
      successMessage: ""
    })
    const foundUser = users.find((user) => user.username === username)
    if (foundUser) {
      if (foundUser.password === password) {
        this.setState({
          successMessage: "User successfully authenicated!"
        })
      } else {
        this.setState({
          errorMessage: "Wrong credentials have been entered!"
        })
      }
    } else {
      this.setState({
        errorMessage: "Wrong credentials have been entered!"
      })
    }
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
    <div className="container">
      {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
      {this.state.successMessage && <p>{this.state.successMessage}</p>}
      <h2>Login</h2>
      <form className="login-form" onSubmit={this.onFormSubmit} >
        <label htmlFor="username">Username</label>
        <input htmlFor="username" name="username" id="username" value={this.state.username} onChange={this.onInputChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={this.state.password} onChange={this.onInputChange} />
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  )
  }
}

export default SignIn;