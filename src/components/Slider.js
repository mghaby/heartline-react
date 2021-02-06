import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function InputSlider({initialValue, getValue, name, label, max, min}) {
  const classes = useStyles();
  const [value, setValue] = useState(initialValue);

  useEffect(()=> getValue(value,{name}),[])
  
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    getValue(value, {name})
  };


  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    getValue(value, {name})
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={min}
            max={max}
            name={name}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            name={name}
            inputProps={{
              step: 1,
              min: {min},
              max: {max},
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
