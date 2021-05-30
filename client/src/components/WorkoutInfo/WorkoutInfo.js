import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Grid, Typography, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createWorkout, updateWorkout } from '../../actions/workouts';


const WorkoutInfo = ({ currentId, setCurrentId }) => {
  const [workoutData, setWorkoutData] = useState({creator: 'Admin', title: '', status: false, description: '' });
  const workout = useSelector((state) => currentId ? state.workouts.find((p) => p._id == currentId) : null);


  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (workout) setWorkoutData(workout);
  }, [workout]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("description i component")
    console.log(workoutData.description)

    dispatch(updateWorkout(currentId, workoutData));

  };

  return ( 
    <>

    <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}onSubmit={handleSubmit}> 
            <Typography variant="h6"> Info </Typography>
            <TextField  name="workout" variant="outlined" fullWidth  value={workoutData.title} onChange={(e) => setWorkoutData({ ...workoutData, title: e.target.value })}
            ></TextField>
            <TextField 
                name="description" variant="outlined" fullWidth  value={workoutData.description} onChange={(e) => setWorkoutData({ ...workoutData, description: e.target.value })}
                multiline
                rows="4"
                className={classes.textField}
                variant="filled"
            ></TextField>
            <Button className={classes.buttonSubmit} vaiant="contained" size="large" type="submit" >
            Lagre
        </Button>
        </form>
      </Paper>

    </>

  );
};

export default WorkoutInfo;