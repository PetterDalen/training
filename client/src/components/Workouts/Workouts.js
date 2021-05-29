import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createWorkout } from '../../actions/workouts';

import Workout from './Workout/Workout'

const Workouts = ({ currentId, setCurrentId }) => {
  const [workoutData, setWorkoutData] = useState({creator: 'Admin', title: '', status: false });
  const workouts = useSelector((state) => state.workouts);

  console.log("workouts");
  console.log(workouts);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (workouts) setWorkoutData(workouts);
  }, [workouts]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    workoutData.status= false;

    dispatch(createWorkout(workoutData));

  };

  return (
    !workouts.length ? <div> ingenting </div> : (

    
    <>
    <Box m={2} pl={8}>
      <Typography variant="h5" >  heihei  </Typography>
    </Box>

    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {
        workouts.map((workout) => (
          <Grid key={workout._id} item xs={12}>
            <Workout workout={workout}> </Workout>
          </Grid>
        ))
      }
      <div className={classes.container}>
        <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}> 
            <TextField  name="workout" variant="outlined" label="New workout" fullWidth  value={workoutData.title} onChange={(e) => setWorkoutData({ ...workoutData, title: e.target.value })}
            ></TextField>
            <Button className={classes.buttonSubmit} vaiant="contained" size="large" type="submit" >
            Legg til
        </Button>
        </form>
      </div>


    </Grid>
    </>

  ));
};

export default Workouts;