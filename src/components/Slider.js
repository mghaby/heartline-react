import React, {useState} from 'react';
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
    width: 70,
  },
});

export default function InputSlider({initialValue, handleGraphics, name, label, max, min}) {
  const classes = useStyles();
  const [sValue, setSValue] = useState(initialValue);

  // useEffect(()=>{handleGraphics({name}, value)},[value])

  const handleSliderChange = (event, newValue) => {
    setSValue(newValue);
    handleGraphics({name}, sValue)
  };


  const handleInputChange = (event) => {
    setSValue(event.target.value === '' ? '' : Number(event.target.value));
    handleGraphics({name}, sValue)
  };

  const handleBlur = () => {
    if (sValue < min) {
      setSValue(min);
    } else if (sValue > max) {
      setSValue(max);
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
            value={typeof sValue === 'number' ? sValue : 0}
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
            value={sValue}
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
