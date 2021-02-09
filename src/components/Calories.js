import React, { useState, useEffect } from 'react'
import Progress from './Progess'
import FormDialog from './Button_Form'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import {useGlobalState} from '../utils/stateContext';


function Calories() {
    const [calories, setCalories] = useState(0)
    const {store, dispatch} = useGlobalState()
    

    const handleOnClickAdd = (event) => {
        dispatch({type: 'addCalories', data: event.target.value})
    }

    const handleOnClickSubtract = (event) => {
      dispatch({type: 'subtractCalories', data: event.target.value})
    }

    return (
      <div>
        <h1>Calories</h1>
        <div style={{width:200}}><Progress value={calories}/></div>
        <FormDialog value={AddSharpIcon} /> 
        <FormDialog value={RemoveSharpIcon} />
      </div>
      
  
    );
  }
  
  
  export default Calories;