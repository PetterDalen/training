import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Grid, form} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createWorkout, updatePost } from '../../actions/workouts';

import Workout from './Workout/Workout'

const Workouts = ({ currentId, setCurrentId }) => {
  const [workoutData, setWorkoutData] = useState({creator: 'Admin', title: '', status: false });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setWorkoutData(post);
  }, [post]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createWorkout(workoutData));

  };

  return (
    <>
    <h1> Workouts </h1>
    <Grid container>
        <Grid item xs={12}>
            <Workout className={classes.workout}/>
        </Grid>
        <Grid item xs={12}>
            <Workout className={classes.workout}></Workout>
        </Grid>
        <Grid item xs={12}>
            <Workout className={classes.workout}></Workout>
        </Grid>
        <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}> 
            <TextField name="workout" variant="outlined" label="New workout" fullWidth  value={workoutData.title} onChange={(e) => setWorkoutData({ ...workoutData, title: e.target.value })}
            ></TextField>
            <Button className={classes.buttonSubmit} vaiant="contained" color="primary" size="large" type="submit" >
            Submit
        </Button>
        </form>


    </Grid>
    </>

  );
};

export default Workouts;