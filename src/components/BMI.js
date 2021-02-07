import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 500
  },
});
// (label-16)/(40-16)*100
const marks = [
      {
        value: 16,
        label: '16',
      },
      {
        value: 17,
        label: '17',
      },
    {
        value: 18.5,
        label: '18.5',
    },
    {
        value: 25,
        label: '25',
    },
    {
        value: 35,
        label: '35',
    },
    {
        value: 40,
        label: '40',
    }
  ];

  function valuetext(value) {
    return `${value}`;
  }

export default function BMI(props) {
  const classes = useStyles();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(props.value)
  },[])
  

  

  return (
    <div className={classes.root}>
      <Typography id="disabled-slider" gutterBottom />

      <Slider
        disabled
        value={value}
        getAriaValueText={valuetext}
        aria-labelledby="disabled-slider"
        step={1}
        valueLabelDisplay="on"
        min={16}
        max={40}
        marks={marks}  />
    </div>
  );
}
