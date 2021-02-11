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
	const {user, loggedInUser} = store
	const [homeUser, setHomeUser] = useState(user)
	const {weight, height, age, mf, activity_level, goal_weight, water, calories, water_count} = homeUser

	const [calculateCalories, setCalculateCalories] = useState('')
	const [totalCalories, setTotalCalories] = useState(2000)
	const [bmi, setBMI] = useState(21)
	// console.log('Home.user: ', user.calories)
// const {weight, goal_weight, height, age, activity_level, mf, calories, water, water_count} = user
	// console.log('Home.user.weight: ', user.weight, 
	// 	'Home.user.goal_weight: ', user.goal_weight,
	// 	'Home.user.height: ', user.height,
	// 	'Home.user.age: ', user.age,
	// 	'Home.user.activity_level: ', user.activity_level,
	// 	'Home.user.mf: ', user.mf)

	// const baseValue = (((10*(user.weight) + 6.25*(user.height) - 5*(user.age) +5) * user.activity_level)*user.mf)
	// const totalCalories = (user.goal_weight>user.weight) ? (baseValue*1.11) : (baseValue*0.89)

	useEffect(()=>{
		setCalculateCalories(((10*(weight) + 6.25*(height) - 5*(age) + mf) * activity_level))
		  }, [weight, height, age, mf, activity_level])

	useEffect(()=>{
		if (goal_weight === weight){
			setTotalCalories(Math.floor(calculateCalories))
		} else {
		(goal_weight>weight) ? setTotalCalories(Math.floor(calculateCalories*1.13)) : setTotalCalories(Math.floor(calculateCalories*0.87))
		}
		  }, [calculateCalories])

	// function sameWeight(){
	// 	goal_weight === weight
	// }

	useEffect(()=>{
    console.log('homeUser.weight*******: ', weight)
  	}, [homeUser])

	useEffect(()=>{
		setHomeUser(user)
		console.log('useEffect.home: ', user)
	}, [user])

	useEffect(()=> {
		console.log('homeUser: ', homeUser)
	}, [homeUser])

	useEffect(() => {
		updateUser( {id: homeUser.id, ...homeUser})
		.then((data) => {
		  dispatch({type: 'setUser', data: data})
		})
	  }, [calories, water_count, weight])
	
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

	// const weightDifference =  () => {
	// 	sameWeight ? `keep current weight` : `${goal_weight - weight} to go`
	// }

    return (
      <div>
		<div style={{width:200}}><Progress value={calories} total={totalCalories}/></div>
		<FormDialog value={AddSharpIcon} operator={addCalories} /> 
        <FormDialog value={RemoveSharpIcon} operator={subtractCalories} />
		<p>{`${user.calories} / ${totalCalories}`}</p>
		<div style={{width:200}}><Progress value={water_count} total={water}/></div>
		<FormDialog value={AddSharpIcon} operator={addWater}/> 
        <FormDialog value={RemoveSharpIcon} operator={subtractWater} />
		<p>{`${user.water_count} / ${water}`}</p>
		<BMI />
		<p>{weight}kg</p>
		{/* <p>{weightDifference}</p> */}
		<FormDialog value={AddSharpIcon} operator={updateWeight}/>
      </div>
    	);
  }
  
  
  export default Home;
  