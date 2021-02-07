import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects({ levels , initialValue, name, handleGraphics}) {
  const classes = useStyles();
  const [state, setState] = useState(initialValue);

  useEffect(()=>{handleGraphics({name}, state)},[state])

  const handleChange = (event) => {
    setState(event.target.value);
    handleGraphics({name}, event.target.value)
  };

  return (
    <div>

      <FormControl className={classes.formControl}>
        <NativeSelect
          value={state}
          onChange={handleChange}
          className={classes.selectEmpty}>
          {levels.map((level) => (<option name={name} key={level.value} value={level.value}>{level.label}</option>))}
        </NativeSelect>
      </FormControl>
     </div>
  ) 
}
