import React, {useEffect, useState} from 'react';
import BMI from './BMI'
import Progress from './Progess'
import FormDialog from './Button_Form'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import {updateUser} from '../services/userServices'
import {useGlobalState} from '../utils/stateContext'

function Home() {
	const {store, dispatch} = useGlobalState()
	const {user} = store
	console.log('Home.user: ', user)
	const {weight, weight_goal, height, age, activityLevel, mf, calories, water, water_count} = user
	console.log('Home.user.weight: ', weight, 
		'Home.user.weight_goal: ', weight,
		'Home.user.height: ', height,
		'Home.user.age: ', age,
		'Home.user.activityLevel: ', activityLevel,
		'Home.user.mf: ', mf)

	const [bmi, setBMI] = useState(21)

	const baseValue = (((10*(weight) + 6.25*(height) - 5*(age) +5) * activityLevel)*mf)
  
	const totalCalories = (weight_goal>weight) ? baseValue*1.11 : baseValue*0.89
	
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

    return (
      <div>
		<div style={{width:200}}><Progress value={calories} total={totalCalories}/></div>
		<FormDialog value={AddSharpIcon} operator={addCalories} /> 
        <FormDialog value={RemoveSharpIcon} operator={subtractCalories} />
		<p>`${calories} / ${totalCalories}`</p>
		<div style={{width:200}}><Progress value={water_count} total={water}/></div>
		<FormDialog value={AddSharpIcon} operator={addWater}/> 
        <FormDialog value={RemoveSharpIcon} operator={subtractWater} />
		<p>`${water_count} / ${water}`</p>
		<BMI />
		<user.weight />
		<FormDialog value={AddSharpIcon} operator={updateWeight}/> 
      </div>
    	);
  }
  
  
  export default Home;
  