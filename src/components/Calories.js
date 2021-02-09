import React, { useState, useEffect } from 'react'
import Progress from './Progess'
import FormDialog from './Button_Form'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import useGlobalState from '../utils/stateContext';


function Calories() {
    const [calories, setCalories] = useState(0)

    const handleOnClickAdd = (event) => {
        addProgress(event)
    }

    const handleOnClickSubtract = (event) => {
        subtractProgess(event)
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