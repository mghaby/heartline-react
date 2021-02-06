import React, { useState, useEffect } from 'react'
import Progress from './Progess'
import FormDialog from './Button_Form'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';


function Calories() {
    const [calories, setCalories] = useState(0)

    const handleOnClickAdd = (e) => {
        setCalories((prev) => prev + e)
    }

    const handleOnClickSubtract = (e) => {
        setCalories((prev) => prev - e)
    }

    return (
      <div>
          <h1>Calories</h1>
          <div style={{width:200}}><Progress value={calories}/></div>
          <FormDialog value={AddSharpIcon} onClick={handleOnClickAdd}/> 
          <FormDialog value={RemoveSharpIcon} onClick={handleOnClickSubtract}/>
      </div>
      
  
    );
  }
  
  
  export default Calories;