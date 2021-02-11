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

export default function BMI() {
  const classes = useStyles();

  const {store} = useGlobalState()
	const {user} = store

  const initialUserStat = {
    weight: 65,
    height: 175
  }
  const initialUserState = 21
  const [bMIStat, setBMIStat] = useState(initialUserStat)
	const [calculateBMI, setCalculateBMI] = useState('')
	const [bMI, setBMI] = useState(initialUserState)
useEffect(()=>{
  setBMIStat(user)
		  }, [user])

  useEffect(()=>{
		setCalculateBMI(Math.floor((bMIStat.weight/(bMIStat.height**2))*10000))
		  }, [bMIStat.weight, bMIStat.height])

	useEffect(()=>{
			setBMI((calculateBMI))
		  }, [calculateBMI])

  useEffect(()=> {
    console.log('BMI: ', bMI)
  })


  return (
    <div className={classes.root}>
      <Typography id="disabled-slider" gutterBottom />

      <Slider
        disabled
        value={bMI}
        aria-labelledby="disabled-slider"
        step={1}
        valueLabelDisplay="on"
        min={16}
        max={40}
        marks={marks}  />
    </div>
  );
}
