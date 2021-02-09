import React, {useState} from 'react';
import BasicButtonGroup from './ButtonGroup'
import Calories from './Calories'
import Water from './Water'
import BMI from './BMI'
import Weight from './Weight'
import {updateUser} from '../services/userServices'
// import {useGlobalState} from '../utils/stateContext'

function Home() {
	// const {store, dispatch} = useGlobalState()
	// const {user} = store

  	// console.log('Home.user: ', user)

	// const [userState, setUserState] = useState(user)

  	// console.log('Home.userState: ', userState)

	  const initialUserState = {	
		calories: 0,
		water: 0,  
		weight: 0
	  }
	  const[userState, setUserState] = useState(initialUserState)

	console.log(userState)

	function handleOnChange(event) {
		setUserState({
		...userState,
		[event.target.name]: event.target.value
		})
	}

	// function addProgress(event) {
	// 	setUserState({
	// 		...userState,
	// 		[event.target.name] : userState[event.target.name] + event 
	// 	})
	// 	// setCalories((prev) => prev + e)
	// }

	// function subtractProgress(event) {
    //     setUserState({
	// 		...userState,
	// 		[event.target.name] : userState[event.target.name] - event 
	// 	})
	// }

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

  	function totalCalories(weight, height, age, activityLevel, male) {
		// if (weight_goal>weight){
		// (((10(weight) + 6.25(height) - 5(age) +5) * activityLevel) (male) ? + 5 : -161)*1.11
		// } else {
		// (((10(weight) + 6.25(height) - 5(age) +5) * activityLevel) (male) ? + 5 : -161)*0.89
		// }

	}
		// (0.25 kg/week)
		// Gain: calories x 1.11
		// Loss: calories x 0.89

	function bMI(weight, height) {
		return weight/(height)^2
	}

    return (
      <div>
		<BasicButtonGroup />
		<Calories />
		<Water />
		<BMI />
		<Weight />
      </div>
    	);
  }
  
  
  export default Home;
  