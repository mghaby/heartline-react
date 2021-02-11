import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputSlider from './Slider'
import RadioButtonsGroup from './Radio'
import NativeSelects from './Select'
import {signUp} from '../services/userServices'
import {useGlobalState} from '../utils/stateContext'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const genders =  [
  {
    value: '5',
    label: 'Male'
  },
  {
    value: '-161',
    label: 'Female'
  }
]
const social = [
  {
    value: 'false',
    label: "Private",
  },
  {
    value: 'true',
    label: "Public",
  }
];

const levels = [
  {
    value: '1.2',
    label: "Sedentary: Little or no excersise",
  },
  {
    value: '1.375',
    label: "Light: Exercise 1-3 times/week",
  },
  {
    value: '1.465',
    label: "Moderate: Exercise or intense 4-5 times/week",
  },
  {
    value: '1.55',
    label: "Active: Daily exercise or intense exercise 3-4 times/week",
  },
  {
    value: '1.725',
    label: "Very Active: Intense exercise 6-7 times/week",
  },
  {
    value: '1.9',
    label: "Extra Active: Very intense exercise daily, or phyiscal job",
  },
  {
    value: '1.95',
    label: "Athlete",
  }
]


function SignUp() {
  const classes = useStyles();
  let history = useHistory()
  const initialFormState = {
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
  }
  
  const[formState, setFormState] = useState(initialFormState)
  const {dispatch} = useGlobalState()

  function handleOnChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  function handleGraphics(target, value) {
    const newValue = JSON.parse(value)
    setFormState({
      ...formState,
      [target.name]: newValue
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    signUp(formState)
    .then((data) => {
      sessionStorage.setItem('id', data.id)
      sessionStorage.setItem('token', data.jwt)
      dispatch({type: 'setLoggedInUser', data: data.id})
      dispatch({type: 'setToken', data: data.jwt})
      console.log('signup.formState: ', formState)
      console.log('signup.data: ', data)
    })
    .catch((error) => console.log(error)); 
    history.push('/Index')
  }

        // sessionStorage.setItem('user', formState)
  return (
    <div>
        <p style={{textAlign: 'left', margin : '10px', color: '#023e8a'}}>Our system uses an algorithim to calculate YOUR needs for YOUR goals! Please input your details below in the metric system.</p>
    <form>
      <Grid
       container
       direction="column"
       justify="space-evenly"
       alignItems="center">

    <h1>My Account </h1>

    <br/>

    <TextField
          required
          id="username"
          label="Username"
          type="text"
          variant="outlined" 
          name="username"
          value={formState.username}
          onChange={handleOnChange}/>

      <br/>

      <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="password"
          value={formState.password}
          onChange={handleOnChange}/>

      <br/>

      <TextField
          id="passwordConfirm"
          label="Password Confirmation"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="password_confirmation"
          value={formState.password_confirmation}
          onChange={handleOnChange}/>

      <br/>

      <h1>About Me</h1>

      <br/>

      <InputSlider
      initialValue={formState.weight} 
      handleGraphics={handleGraphics} 
      name={'weight'} 
      label={'Weight'} 
      max={450} 
      min={1}/>

      <br/>

      <InputSlider
      initialValue={formState.height} 
      handleGraphics={handleGraphics} 
      name={'height'} 
      label={'Height'} 
      max={280} 
      min={50}/> 

      <br/>

      <InputSlider 
      initialValue={formState.age} 
      handleGraphics={handleGraphics} 
      name={'age'} 
      label={'Age'} 
      max={80} 
      min={15}/>

      <br/>

      <RadioButtonsGroup 
      initialValue={formState.mf.toString()} 
      handleGraphics={handleGraphics} 
      name={'mf'} 
      buttons={genders}/>

      <br/>

      <NativeSelects
      initialValue={formState.activity_level} 
      levels={levels} name={'activity_level'} 
      handleGraphics={handleGraphics}/>

      <br/>

      <h1>My Goals</h1>

      <br/>

      <InputSlider 
      initialValue={formState.goal_weight} 
      handleGraphics={handleGraphics} 
      name={'goal_weight'} 
      label={'Weight'} 
      max={280} 
      min={50}/>

      <br/>

      <InputSlider 
      initialValue={formState.water} 
      handleGraphics={handleGraphics} 
      name={'water'} 
      label={'Water'} 
      max={4000} 
      min={250}/>

      <br/>

      <RadioButtonsGroup 
      initialValue={formState.public.toString()} 
      handleGraphics={handleGraphics} 
      name={'public'} 
      buttons={social}/>

      <br/>

      <Button
        variant="contained" 
        size="large" color="primary" 
        className={classes.margin} 
        onClick={handleSubmit}>
        Submit
      </Button>

        </Grid>
  </form>
  </div>
  );
}


export default SignUp;