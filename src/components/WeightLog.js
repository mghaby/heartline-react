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

    const initialRandomState = {
        username: 'username', 
        goal_weight: 'goal_weight',
        weight: 'weight',
        age: 'age'
    }

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
                User: {randomUser.username}
                <br/>
                <br/>
                Goal: {randomUser.goal_weight} Kg
                <br/>
                <br/>
                Current: {randomUser.weight} Kg
                <br/>
                <br/>
                Age: {randomUser.age}
            </Paper>


            <Paper elevation={3}
            style={paperStyles}>
                User: {random[1].username}
                <br/>
                <br/>
                Goal: {random[1].goal_weight} Kg
                <br/>
                <br/>
                Current: {random[1].weight} Kg
                <br/>
                <br/>
                Age: {random[1].age}
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                User: {random[2].username}
                <br/>
                <br/>
                Goal: {random[2].goal_weight} Kg
                <br/>
                <br/>
                Current: {random[2].weight} Kg
                <br/>
                <br/>
                Age: {random[2].age}
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                User: {random[3].username}
                <br/>
                <br/>
                Goal: {random[3].goal_weight} Kg
                <br/>
                <br/>
                Current: {random[3].weight} Kg
                <br/>
                <br/>
                Age: {random[3].age}
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                User: {random[4].username}
                <br/>
                <br/>
                Goal: {random[4].goal_weight} Kg
                <br/>
                <br/>
                Current: {random[4].weight} Kg
                <br/>
                <br/>
                Age: {random[4].age}
            </Paper>
        </Grid>
        </div>
    )
};

export default WeightLog;