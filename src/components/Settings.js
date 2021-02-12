import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputSlider from './Slider'
import RadioButtonsGroup from './Radio'
import NativeSelects from './Select'
import {updateUser} from '../services/userServices'
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

export default function Settings() {
  const classes = useStyles();
  let history = useHistory()
  const {store, dispatch} = useGlobalState()
	const {user, loggedInUser} = store

  const initialUserState = {
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

	const [formState, setFormState] = useState(initialUserState)

  useEffect(()=>{
		setFormState(user)
		  }, [user])

  console.log('formState', formState)

  function handleGraphics(target, value) {
    const newValue = JSON.parse(value)
    setFormState({
      ...formState,
      [target.name]: newValue
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    updateUser( {id: formState.id, ...formState})
    .then((data) => {
      dispatch({type: 'setUser', data: data})})
    history.push('/Home')
    console.log(formState)
  }

  return (
    <div>
        <p style={{textAlign: 'left', margin : '10px', color: '#023e8a'}}>Our system uses an algorithim to calculate YOUR needs for YOUR goals! Please input your details below in the metric system.</p>
    <form>
      <Grid
       container
       direction="column"
       justify="space-evenly"
       alignItems="center">

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
