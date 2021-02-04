import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function OutlinedButtons() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Button variant="outlined" color="primary">
          <AddSharpIcon />
        </Button>
        <Button variant="outlined" color="primary">
          <RemoveSharpIcon />
        </Button>
        </div>
  );
}

export default OutlinedButtons