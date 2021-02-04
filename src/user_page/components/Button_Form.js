import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (e) => {
    setNumber(e.target.value)
  }

  const handleSubmit = () => {
      const num = parseInt(number, 10)
      if (isNaN(num)) {
          setNumber('')
          alert('Input must be a numerical value')
      } else {
      props.onClick(num)
      setOpen(false);
      setNumber('')
      }
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <props.value />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Input</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Log your calories
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Calories"
            type="text"
            fullWidth
            value={number}
            onChange={handleOnChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Log
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
