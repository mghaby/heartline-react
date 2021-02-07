import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import getRandom from '../services/userServices';

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
    return(
        <div>
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
            <Paper elevation={3}
            style={paperStyles}>
                Username:
                <br/>
                <br/>
                Goal Weight:
                <br/>
                <br/>
                Current Weight:
                <br/>
                <br/>
                Age:
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                Username:
                <br/>
                <br/>
                Goal Weight:
                <br/>
                <br/>
                Current Weight:
                <br/>
                <br/>
                Age:
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                Username:
                <br/>
                <br/>
                Goal Weight:
                <br/>
                <br/>
                Current Weight:
                <br/>
                <br/>
                Age:
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                Username:
                <br/>
                <br/>
                Goal Weight:
                <br/>
                <br/>
                Current Weight:
                <br/>
                <br/>
                Age:
            </Paper>
            <Paper elevation={3}
            style={paperStyles}>
                Username:
                <br/>
                <br/>
                Goal Weight:
                <br/>
                <br/>
                Current Weight:
                <br/>
                <br/>
                Age:
            </Paper>
        </Grid>
        <button onClick={getRandom}>testing</button>
        </div>
    )
};

export default WeightLog;