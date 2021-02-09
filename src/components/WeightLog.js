import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useGlobalState} from '../utils/stateContext'
import {getRandom} from '../services/userServices'

// make all text in here black/grey


const paperStyles = {
    backgroundColor: "rgba(0,0,0, 0)",
    borderRadius: "20px",
    padding: "10px",
    width: "150px",
    textAlign: "center",
    height: "175px"
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

//   this is the basic syntax thing, from the res that you're console logging, we can add .age or whatever for that particular value
// getRandom().then((res) => console.log(res))

function WeightLog(){
    const classes = useStyles();
    const {store, dispatch} = useGlobalState();
    const {random} = store

    useEffect(() => {
        getRandom()
    .then((data) => {
      dispatch({type: 'addRandom', data: data})
    }).then(() => {
        console.log('weightlog.random:', random.username)
    }).catch((error) => console.log(error))
    },[])
    
    return(
        <div>
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
            <Paper elevation={3}
            style={paperStyles}>
                User: {random.username}
                <br/>
                <br/>
                Goal: {random.goal_weight} Kg
                <br/>
                <br/>
                Current: {random.weight} Kg
                <br/>
                <br/>
                Age: {random.age}
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                User: {random.username}
                <br/>
                <br/>
                Goal: {random.goal_weight} Kg
                <br/>
                <br/>
                Current: {random.weight} Kg
                <br/>
                <br/>
                Age: {random.age}
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                User: {random.username}
                <br/>
                <br/>
                Goal: {random.goal_weight} Kg
                <br/>
                <br/>
                Current: {random.weight} Kg
                <br/>
                <br/>
                Age: {random.age}
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                User: {random.username}
                <br/>
                <br/>
                Goal: {random.goal_weight} Kg
                <br/>
                <br/>
                Current: {random.weight} Kg
                <br/>
                <br/>
                Age: {random.age}
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                User: {random.username}
                <br/>
                <br/>
                Goal: {random.goal_weight} Kg
                <br/>
                <br/>
                Current: {random.weight} Kg
                <br/>
                <br/>
                Age: {random.age}
            </Paper>
        </Grid>
        </div>
    )
};

export default WeightLog;