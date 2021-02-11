import React, { useEffect, useState } from 'react';
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

    const initialRandomState = [
        {
        username: 'username', 
        goal_weight: 'goal_weight',
        weight: 'weight',
        age: 'age'
    },
    {
        username: 'username', 
        goal_weight: 'goal_weight',
        weight: 'weight',
        age: 'age'
    },
    {
        username: 'username', 
        goal_weight: 'goal_weight',
        weight: 'weight',
        age: 'age'
    },
    {
        username: 'username', 
        goal_weight: 'goal_weight',
        weight: 'weight',
        age: 'age'
    },
    {
        username: 'username', 
        goal_weight: 'goal_weight',
        weight: 'weight',
        age: 'age'
    }
    ]

    const [randomUser, setRandomUser] = useState(initialRandomState)
//     useEffect(() => {
//     getRandom()
//     .then((data) => {
//     sessionStorage.setItem('random', data[0])
//     dispatch({type: 'addRandom', data: data[0]})
//     console.log('weightlog.data: ', data)
//     // dispatch({type: 'addRandom', data: data[0]})
//     // console.log('weightlog.data: ' , data)
// })
//     // console.log('weightlog.data:', data[0])})
//     .catch((error) => console.log(error))
//     },[])
    
    useEffect(() => {
        setRandomUser(random)
    },[random])
    // .then(() => {console.log('weightlog.random:', random.username)
    console.log('weightlog.random: ', random);

    return(
        <div>
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
            <Paper elevation={3}
            style={paperStyles}>
                User: {randomUser[0].username}
                <br/>
                <br/>
                Goal: {randomUser[0].goal_weight} Kg
                <br/>
                <br/>
                Current: {randomUser[0].weight} Kg
                <br/>
                <br/>
                Age: {randomUser[0].age}
            </Paper>


            <Paper elevation={3}
            style={paperStyles}>
                User: {randomUser[1].username}
                <br/>
                <br/>
                Goal: {randomUser[1].goal_weight} Kg
                <br/>
                <br/>
                Current: {randomUser[1].weight} Kg
                <br/>
                <br/>
                Age: {randomUser[1].age}
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                User: {randomUser[2].username}
                <br/>
                <br/>
                Goal: {randomUser[2].goal_weight} Kg
                <br/>
                <br/>
                Current: {randomUser[2].weight} Kg
                <br/>
                <br/>
                Age: {randomUser[2].age}
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                User: {randomUser[3].username}
                <br/>
                <br/>
                Goal: {randomUser[3].goal_weight} Kg
                <br/>
                <br/>
                Current: {randomUser[3].weight} Kg
                <br/>
                <br/>
                Age: {randomUser[3].age}
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                User: {randomUser[4].username}
                <br/>
                <br/>
                Goal: {randomUser[4].goal_weight} Kg
                <br/>
                <br/>
                Current: {randomUser[4].weight} Kg
                <br/>
                <br/>
                Age: {randomUser[4].age}
            </Paper>
        </Grid>
        </div>
    )
};

export default WeightLog;