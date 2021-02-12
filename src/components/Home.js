import React, {useEffect, useState} from 'react';
import BMI from './BMI'
import Progress from './Progess'
import FormDialog from './FormDialog'
import Grid from '@material-ui/core/Grid';
import {updateUser} from '../services/userServices'
import {useGlobalState} from '../utils/stateContext'
import WeightLog from './WeightLog';

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
	const [totalCalories, setTotalCalories] = useState('')

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
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid item xs={6} sm={3}>
					<h1>Calorie Consumption</h1>
					<div style={{width:200}}><Progress value={homeUser.calories} total={totalCalories}/></div>
					<FormDialog
					icon={'+'}
					operator={addCalories} 
					max={totalCalories} 
					min={1} 
					title={'Calories'} 
					message={'Please log a value to increment your calories'}
					initialValue={250} 
					/> 

					<FormDialog 
					icon={'-'} 
					operator={subtractCalories} 
					max={totalCalories} 
					min={1} 
					title={'Calories'} 
					message={'Please log a value to decrement your calories'}
					initialValue={250}
					/>
					<p>{`${homeUser.calories} / ${totalCalories} Calories`}</p>
				</Grid>

		
				<Grid item xs={6} sm={3}>
					<h1>Water Consumption</h1>
					<div style={{width:200}}><Progress value={homeUser.water_count} total={homeUser.water} /></div>
					<FormDialog
					icon={'+'} 
					operator={addWater} 
					max={homeUser.water} 
					min={1} 
					title={'Water'} 
					message={'Please log a value to increment your water consumption'}
					initialValue={250}
					/> 

					<FormDialog 
					icon={'-'} 
					operator={subtractWater} 
					max={homeUser.water} 
					min={1} 
					title={'Calories'} 
					message={'Please log a value to decrement your water consumption'}
					initialValue={250}
					/>

					<p>{`${homeUser.water_count} / ${homeUser.water} mL`}</p>

				</Grid>
					
				<Grid item xs={6} sm={3}>
					<BMI />
					<br/>
					<h1>Weight</h1>
					<p>{homeUser.weight}kg</p>
					{homeUser.goal_weight === homeUser.weight ? <p>Keep current weight</p> : <p>{Math.abs(homeUser.goal_weight - homeUser.weight)}kg to go</p>}

					<FormDialog
					icon={'+'} 
					operator={updateWeight} 
					max={450} 
					min={1} 
					title={'Current weight'} 
					message={'Please log in your weight'} 
					initialValue={homeUser.weight}
					/>
				</Grid>
			</Grid>
        <hr/>
        <br/>
			<WeightLog />
    	</div>
    );
  }
  
  
  export default Home;
  