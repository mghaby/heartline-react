import React, {useEffect, useState} from 'react';
import BMI from './BMI'
import Progress from './Progess'
import FormDialog from './Button_Form'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import {getUser, updateUser} from '../services/userServices'
import {useGlobalState} from '../utils/stateContext'

function Home() {
	const {store, dispatch} = useGlobalState()
	const {user, loggedInUser} = store
	console.log('Home.user: ', user)
	// const {weight, goal_weight, height, age, activity_level, mf, calories, water, water_count} = user
	// console.log('Home.user.weight: ', user.weight, 
	// 	'Home.user.goal_weight: ', user.goal_weight,
	// 	'Home.user.height: ', user.height,
	// 	'Home.user.age: ', user.age,
	// 	'Home.user.activity_level: ', user.activity_level,
	// 	'Home.user.mf: ', user.mf)

	const [bmi, setBMI] = useState(21)

	const baseValue = (((10*(user.weight) + 6.25*(user.height) - 5*(user.age) +5) * user.activity_level)*user.mf)
  
	const totalCalories = (user.goal_weight>user.weight) ? baseValue*1.11 : baseValue*0.89

	const health = [
		{SevereThinness: '<16'},
		{ModerateThinness: '16 - 17'},
		{MildThinness: '17 - 18.5'},
		{Normal: '18.5 - 25'},
		{Overweight: '25 - 30'},
		{ObeseClassI: '30 - 35'},
		{ObeseClassII: '35 - 40'},
		{ObeseClassIII: '>40'}
	]

	function addCalories(calories){
		dispatch({type: 'addCalories', data: calories})
	}

	function subtractCalories(calories){
		dispatch({type: 'subtractCalories', data: calories})
	}
	function addWater(water){
		dispatch({type: 'addWater', data: water})
	}
	function subtractWater(water){
		dispatch({type: 'subtractWater', data: water})
	}
	function updateWeight(weight){
		dispatch({type: 'updateWeight', data: weight})
	}

	// useEffect(() => {
	// 	updateUser( {id: formState.id, ...formState})
	// 	.then((data) => {
	// 	  dispatch({type: 'setUser', data: data})
	// 	})
	// },[user])

	useEffect(() => {
        getUser(loggedInUser)
        .then((user) => dispatch({type: 'setUser', data: user}))
        .catch((error) => console.log(error));
    console.log('app.user: ', user)
    console.log('app.loggedInUser: ', loggedInUser)
    },[loggedInUser])

    return (
      <div>
		<div style={{width:200}}><Progress value={user.calories} total={totalCalories}/></div>
		<FormDialog value={AddSharpIcon} operator={addCalories} /> 
        <FormDialog value={RemoveSharpIcon} operator={subtractCalories} />
		<p>{`${user.calories} / ${totalCalories}`}</p>
		<div style={{width:200}}><Progress value={user.water_count} total={user.water}/></div>
		<FormDialog value={AddSharpIcon} operator={addWater}/> 
        <FormDialog value={RemoveSharpIcon} operator={subtractWater} />
		<p>{`${user.water_count} / ${user.water}`}</p>
		<BMI />
		{user.weight}
		<FormDialog value={AddSharpIcon} operator={updateWeight}/> 
      </div>
    	);
  }
  
  
  export default Home;
  