import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {useGlobalState} from '../utils/stateContext'

const useStyles = makeStyles({
  root: {
    width: 500
  },
});
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

export default function BMI() {
  const classes = useStyles();

  const {store} = useGlobalState()
	const {user} = store
  const {weight, height} = user

  const [bmi, setBMI] = useState(21)

  useEffect(() => {
    setBMI((weight/(height^2)*10000))
  },[weight, height])
  

  return (
    <div className={classes.root}>
      <Typography id="disabled-slider" gutterBottom />

      <Slider
        disabled
        value={bmi}
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
