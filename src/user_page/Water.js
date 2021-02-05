import React, { useState, useEffect } from 'react'
import Progress from './components/Progess'
import FormDialog from './components/Button_Form'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';


function Water() {
    const [water, setWater] = useState(0)

    const handleOnClickAdd = (e) => {
        setWater((prev) => prev + e)
    }

    const handleOnClickSubtract = (e) => {
        setWater((prev) => prev - e)
    }

    return (
      <div>
          <h1>Water</h1>
          <div style={{width:200}}><Progress value={water}/></div>
          <FormDialog value={AddSharpIcon} onClick={handleOnClickAdd}/> 
          <FormDialog value={RemoveSharpIcon} onClick={handleOnClickSubtract}/>
      </div>
      
  
    );
  }
  
  
  export default Water;