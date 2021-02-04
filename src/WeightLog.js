import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// make all text in here black/grey

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

function WeightLog(){
    const classes = useStyles();
    return(
        <div>
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
            <Paper>
                Username:
                <br/>
                Goal Weight:
                <br/>
                Current Weight:
                <br/>
                Age:
            </Paper>
            <Paper>
                Username:
                <br/>
                Goal Weight:
                <br/>
                Current Weight:
                <br/>
                Age:
            </Paper>
            <Paper>
                Username:
                <br/>
                Goal Weight:
                <br/>
                Current Weight:
                <br/>
                Age:
            </Paper>
            <Paper>
                Username:
                <br/>
                Goal Weight:
                <br/>
                Current Weight:
                <br/>
                Age:
            </Paper>
            <Paper>
                Username:
                <br/>
                Goal Weight:
                <br/>
                Current Weight:
                <br/>
                Age:
            </Paper>
        </Grid>
        <hr/>
        </div>
    )
};

export default WeightLog;