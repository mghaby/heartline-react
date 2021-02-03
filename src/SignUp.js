import React from 'react';
import { useForm } from 'react-hook-form';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

function SignUp() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  // const classes = useStyles();
  
  return (
      <div>
         {/* <TextField id="standard-basic" label="Standard" /> */}
        <p>Our system uses an algorithim to calculate YOUR needs for YOUR goals! Please input your details below in the metric system.</p>
    <form>
      <input type="text" placeholder="Username" name="Username" ref={register({required: true, maxLength: 80})} />
      <br/>
      <input type="text" placeholder="Password" name="Password" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <br/>
      <input type="text" placeholder="Password Confirmation" name="PasswordConfirmation" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <br/>
      <input type="number" placeholder="Goal Weight" name="GoalWeight" ref={register({required: true, min: 0})} />
      <br/>
      <input type="number" placeholder="Weight" name="Weight" ref={register({required: true, min: 0})} />
      <br/>
      <input type="number" placeholder="Age" name="Age" ref={register({required: true, min: 0})} />
      <br/>
      <input type="number" placeholder="Goal Water Level" name="GoalWaterLevel" ref={register({min: 2})} />
      <br/>
      <select name="Gender" ref={register}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br/>
      <select name="Daily Activity Level" ref={register}>
        <option value="Sedentary - Little to no exercise">Sedentary - Little to no exercise</option>
        <option value="Light - Exercise 1-3 times a week">Light - Exercise 1-3 times a week</option>
        <option value="Moderate - Exercise or intense exercise 4-5 times a week">Moderate - Exercise or intense exercise 4-5 times a week</option>
        <option value="Active - Daily exercise or intense exercise 4-5 times a week">Active - Daily exercise or intense exercise 4-5 times a week</option>
        <option value="Very Active - Intense exercise 6-7 times a week">Very Active - Intense exercise 6-7 times a week</option>
        <option value=" Extra Active - Very intense exercise daily, or physical job"> Extra Active - Very intense exercise daily, or physical job</option>
        <option value="Athlete">Athlete</option>
      </select>
      <br/>
      <p>Would you like your progress to be seen by other users?</p>
      <select name="Would you like your progress to be seen by other users?" ref={register}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <br/>

      <input type="submit" onSubmit={handleSubmit(onSubmit)}/>
    </form>
    </div>
  );
}


export default SignUp;