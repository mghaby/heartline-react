import React, { useState } from 'react'
import FormDialog from './components/Button_Form'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';

function Weight() {
    const [weight, setWeight] = useState(0)

    const handleOnClickAdd = (e) => {
        setWeight((prev) => prev + e)
    }

    const handleOnClickSubtract = (e) => {
        setWeight((prev) => prev - e)
    }
    return (
        <div>
            <h1>Weight</h1>
            <div>{weight}Kg</div>
            <FormDialog value={AddSharpIcon} onClick={handleOnClickAdd}/> 
            <FormDialog value={RemoveSharpIcon} onClick={handleOnClickSubtract}/>
        </div>

      
  
    );
  }
  
  
  export default Weight;
  