import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputSlider from './Slider'
import RadioButtonsGroup from './Radio'


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

const conversions = { gender: [
  {
    trueValue: 5,
    value: 'male',
    label: 'Male'
  },
  {
    trueValue: -161,
    value: 'female',
    label: 'Female'
  }
],
public: [
  {
    trueValue: 'true',
    value: 'true',
    label: "Public",
  },
  {
    trueValue: 'false',
    value: 'false',
    label: "Private",
  },
]};

// const activities = [
//   {
//     id: 1.2,
//     value: 1.2,
//     label: "Sedentary - Little or no excersise",
//   },
//   {
//     id: 1.375,
//     value: 1.375,
//     label: "Light - Exercise 1-3 times/week",
//   },
//   {
//     id: 1.465,
//     value: 1.465,
//     label: "Moderate - Exercise or intense 4-5 times/week",
//   },
//   {
//     id: 1.55,
//     value: 1.55,
//     label: "Active - Daily exercise or intense exercise 3-4 times/week",
//   },
//   {
//     id: 1.725,
//     value: 1.725,
//     label: "Very Active - Intense exercise 6-7 times/week",
//   },
//   {
//     id: 1.9,
//     value: 1.9,
//     label: "Extra Active - Very intense exercise daily, or phyiscal job",
//   },
//   {
//     id: 1.95,
//     value: 1.95,
//     label: "Athlete",
//   }
// ]

function SignUp() {

  const classes = useStyles();

  const initialFormState = {
    username: '',
    password: '',
    passwordConfirm: '',
    weight: 65,
    height: 175,
    age: 30,    
    gender: 5,
    activity_level: 1,
    weight_goal: 65,
    water_goal: 2000,   
    public: false,

  }

  const[formData, setFormData] = useState(initialFormState)

  function handleOnChange(event) {
    console.log('update:', event.target.value)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  
  function handleSubmit() {
    console.log(formData)
    
  }

  function getValue(value, target) {
    setFormData({
      ...formData,
      [target.name]: value
    })
  }

  function handleRadio(target, value){
    setFormData({
      ...formData,
      [target.name]: value
    })
    console.log(conversions[value].trueValue)
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
         
    <h1>My Account </h1>
    <br/>
    <TextField
          required
          id="username"
          label="Username"
          type="text"
          variant="outlined" 
          name="username"
          value={formData.username}
          onChange={handleOnChange}
        />
      <br/>
      <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          />
      <br/>
      <TextField
          id="passwordConfirm"
          label="Password Confirmation"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleOnChange}
          />
      <br/>
      <h1>About Me</h1>
      <br/>
      <InputSlider initialValue={formData.weight} getValue={getValue} name={'weight'} label={'Weight'} max={450} min={1}/>
      <br/>
      <InputSlider initialValue={formData.height} getValue={getValue} name={'height'} label={'Height'} max={280} min={50}/> 
      <br/>
      <InputSlider initialValue={formData.age} getValue={getValue} name={'age'} label={'Age'} max={80} min={15}/>
      <br/>
      <RadioButtonsGroup initialValue={'male'} radioValue={handleRadio} name={'gender'} buttons={conversions.gender}/>
      <br/>
      <h1>My Goals</h1>
      <br/>
      <InputSlider initialValue={formData.weight_goal} getValue={getValue} name={'weight_goal'} label={'Weight'} max={280} min={50}/>
      <br/>
    <InputSlider initialValue={formData.water_goal} getValue={getValue} name={'water_goal'} label={'Water'} max={4000} min={250}/>
      <br/>
      <RadioButtonsGroup initialValue={'false'} radioValue={handleRadio} name={'public'} buttons={conversions.public}/>
        <span>

        <br/>

        </span>

        <br/>

   {/* <div>
     <TextField
     id="outlined-select-currency"
     select
     label="Select Activity Level"
    //  value={activity}
    //  onChange={handleChangeActivity}
     helperText="Please Select your Daily Activity Level"
     varient="outlined"
     >
       {activities.map((option) => (
         <MenuItem key={option.value} value={option.value}>
           {option.label}
         </MenuItem>
       ))}
       </TextField>
       <br/>
   </div> */}

   <br/>
    <div>
   {/* <TextField
     id="outlined-select-currency"
     select
     label="Select Public Setting"
    //  value={social}
    //  onChange={'handleChangeSocial'}
     helperText="Would You Like Your Progress Made Public?"
     varient="outlined"
     >
       {socials.map((option) => (
         <MenuItem key={option.value} value={option.value}>
           {option.label}
         </MenuItem>
       ))}
       </TextField> */}
       <br/>
       
   </div>
  
        <div>
          <Button
            variant="contained" 
            size="large" color="primary" 
            className={classes.margin} 
            onClick={handleSubmit}>
            Submit
          </Button>
        </div>
        </Grid>
    </form>
    </div>
  );
}


export default SignUp;