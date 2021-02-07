import React, {useState} from 'react'
import Calories from './Calories'
import Water from './Water'
import BMI from './BMI'
import Weight from './Weight'
import {getUser} from '../services/userServices'
import {useGlobalState} from '../utils/stateContext'
import {useHistory} from 'react-router-dom'

function Home() {

	// const {store,dispatch} = useGlobalState()
	// const {user, loggedInUser} = store
	// const [userState, setUserState] = useState(initialFormState)

	// useEffect(() => {
	// 	getUser(loggerInUser)
	// 	.then((user) => dispatch({type: 'setUser', data: user}))
	// 	.catch((error) => console.log(error))
	// },[])

	// const initialFormState = {
	// 		calories: 0,
	// 		water: 0,
	// 		weight: 0
	// 	}

	// function handleOnChange(event) {
	// 	console.log('update:', event.target.value)
	// 	setFormState({
	// 	  ...formState,
	// 	  [event.target.name]: event.target.value
	// 	})
	//   }

	// function addProgress(event) {
	// 	setFormState({
	// 		...formState,
	// 		[event.target.name] : formState[event.target.name] + event 
	// 	})
	// 	// setCalories((prev) => prev + e)
	// }

	// function subtractProgress(event) {
    //     setFormState({
	// 		...formState,
	// 		[event.target.name] : formState[event.target.name] - event 
	// 	})
	// }

	// const health = [
	// 	{SevereThinness: '<16'},
	// 	{ModerateThinness: '16 - 17'},
	// 	{MildThinness: '17 - 18.5'},
	// 	{Normal: '18.5 - 25'},
	// 	{Overweight: '25 - 30'},
	// 	{ObeseClassI: '30 - 35'},
	// 	{ObeseClassII: '35 - 40'},
	// 	{ObeseClassIII: '>40'}
	// ]

  	// function totalCalories(weight, height, age, activityLevel) {
	// 	if (weight_goal>weight){
	// 	(((10(weight) + 6.25(height) - 5(age) +5) * activityLevel) (male) ? + 5 : -161)*1.11
	// 	} else {
	// 	(((10(weight) + 6.25(height) - 5(age) +5) * activityLevel) (male) ? + 5 : -161)*0.89
	// 	}

	// }
	// 	// (0.25 kg/week)
	// 	// Gain: calories x 1.11
	// 	// Loss: calories x 0.89

	// function bMI(weight, height) {
	// 	return weight/(height)^2
	// }

    return (
      <div>
		{/* <Calories addProgress={addProgress} subtractProgress={subtractProgress}/>
		<Water addProgress={addProgress} subtractProgress={subtractProgress}/>
		<BMI />
		<Weight addProgress={addProgress} subtractProgress={subtractProgress}/> */}
      </div>
      
  
    	);
  }
  
  
  export default Home;
  