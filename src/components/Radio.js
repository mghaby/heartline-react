import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioButtonsGroup({initialValue, buttons, radioValue, name}) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event){
    setValue(event.target.value);
    radioValue({name}, event.target.value) 
    // console.log({name}, event.target.value)
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        {buttons.map((button) => (<FormControlLabel key={button.value} name={name} value={button.value} control={<Radio />} label={button.label} />))}
      </RadioGroup>
    </FormControl>
  );
}       

