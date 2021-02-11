import React, {useEffect, useState} from 'react';
import BMI from './BMI'
import Progress from './Progess'
import FormDialog from './Button_Form'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import {updateUser} from '../services/userServices'
import {useGlobalState} from '../utils/stateContext'

function Home() {
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

	const {store, dispatch} = useGlobalState()
	const {user} = store
	const [homeUser, setHomeUser] = useState(initialUserState)

	useEffect(()=>{
		setHomeUser(user)
		  }, [user])

	const [calculateCalories, setCalculateCalories] = useState('')
	const [totalCalories, setTotalCalories] = useState("")

	useEffect(()=>{
		setCalculateCalories(((10*(homeUser.weight) + 6.25*(homeUser.height) - 5*(homeUser.age) + homeUser.mf) * homeUser.activity_level))
	}, [homeUser.weight, homeUser.height, homeUser.age, homeUser.mf, homeUser.activity_level])

	useEffect(()=>{
		if (homeUser.goal_weight === homeUser.weight){
			setTotalCalories(Math.floor(calculateCalories))
		} else {
		(homeUser.goal_weight>homeUser.weight) ? setTotalCalories(Math.floor(calculateCalories*1.13)) : setTotalCalories(Math.floor(calculateCalories*0.87))
		}
	}, [calculateCalories])

	useEffect(() => {
		updateUser( {id: homeUser.id, ...homeUser})
		.then((data) => {
		  dispatch({type: 'setUser', data: data})
		})
	}, [homeUser.calories, homeUser.water_count, homeUser.weight])
	
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

    return (
      <div>
		<div style={{width:200}}><Progress value={homeUser.calories} total={totalCalories}/></div>
		<FormDialog value={AddSharpIcon} operator={addCalories} max={totalCalories} min={1} /> 
        <FormDialog value={RemoveSharpIcon} operator={subtractCalories} max={totalCalories} min={1} />
		<p>{`${homeUser.calories} / ${totalCalories}`}</p>
		<div style={{width:200}}><Progress value={homeUser.water_count} total={homeUser.water} /></div>
		<FormDialog value={AddSharpIcon} operator={addWater} max={homeUser.water_count} min={1}/> 
        <FormDialog value={RemoveSharpIcon} operator={subtractWater} max={homeUser.water_count} min={1} />
		<p>{`${homeUser.water_count} / ${homeUser.water}`}</p>
		<BMI />
		<p>{homeUser.weight}kg</p>
		{/* <p>{weightDifference}</p> */}
		<FormDialog value={AddSharpIcon} operator={updateWeight} max={450} min={1}/>
      </div>
    );
  }
  
  
  export default Home;
  