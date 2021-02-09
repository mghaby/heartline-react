import React, { useState } from 'react'
import FormDialog from './Button_Form'
import AddSharpIcon from '@material-ui/icons/AddSharp';

function Weight() {
    const [weight, setWeight] = useState(0)

    return (
        
        <div>
            <h1>Weight</h1>
            <div>{weight}Kg</div>
            <FormDialog value={AddSharpIcon} /> 
        </div>

      
  
    );
  }
  
  
  export default Weight;
  