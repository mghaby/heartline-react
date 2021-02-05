import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


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

const genders = [
  {
    value: 5,
    label: 'Male',
  },
  {
    value: -161,
    label: 'Female',
  }
];

const activities = [
  {
    value: 1.2,
    label: "Sedentary - Little or no excersise",
  },
  {
    value: 1.375,
    label: "Light - Exercise 1-3 times/week",
  },
  {
    value: 1.465,
    label: "Moderate - Exercise or intense 4-5 times/week",
  },
  {
    value: 1.55,
    label: "Active - Daily exercise or intense exercise 3-4 times/week",
  },
  {
    value: 1.725,
    label: "Very Active - Intense exercise 6-7 times/week",
  },
  {
    value: 1.9,
    label: "Extra Active - Very intense exercise daily, or phyiscal job",
  },
  {
    value: 1.95,
    label: "Athlete",
  }
]

const socials = [
  {
    value: true,
    label: "Yes",
  },
  {
    value: false,
    label: "No",
  },
]


function Settings() {
  const classes = useStyles();
  const [gender, setGender] = React.useState('male');
  const [activity, setActivity] = React.useState('Sedentary')
  const [social, setSocial] = React.useState('Yes')

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  
  const handleChangeActivity = (event) => {
    setActivity(event.target.value);
  };

  const handleChangeSocial = (event) => {
    setSocial(event.target.value);
  };

  return (
      <div>
        <p style={{textAlign: 'left', margin : '10px', color: '#023e8a'}}>Edit any of the fields below to update your details!</p>
    <form>
      <Grid
       container
       direction="column"
       justify="space-evenly"
       alignItems="center">

      <TextField
          id="outlined-password-input"
          label="Update Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          />
      <br/>
      <TextField
          id="outlined-number"
          label="Update Current Weight"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br/>
        <TextField
          id="outlined-number"
          label="Update Goal Weight"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br/>
        <TextField
          id="outlined-number"
          label="Update Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br/>
        <TextField
          id="outlined-number"
          label="Update Height"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br/>
        <TextField
          id="outlined-number"
          label="Update Goal Water"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br/>

        <span>
        <TextField
          id="outlined-select-currency"
          select
          label="Update Gender"
          value={gender}
          onChange={handleChange}
          helperText="Please select your Gender"
          variant="outlined"
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      <br/>
   </span>
   <br/>
   <div>
     <TextField
     id="outlined-select-currency"
     select
     label="Update Activity Level"
     value={activity}
     onChange={handleChangeActivity}
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
   </div>
   <br/>
    <div>
   <TextField
     id="outlined-select-currency"
     select
     label="Update Public Setting"
     value={social}
     onChange={handleChangeSocial}
     helperText="Would You Like Your Progress Made Public?"
     varient="outlined"
     >
       {socials.map((option) => (
         <MenuItem key={option.value} value={option.value}>
           {option.label}
         </MenuItem>
       ))}
       </TextField>
       <br/>
       
   </div>
  
        <div>
          <Button variant="contained" size="large" color="primary" className={classes.margin}>
          Submit</Button>
        </div>
        </Grid>
    </form>
    </div>
  );
}


export default Settings;