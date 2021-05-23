import React, { useState } from 'react';
import Workout from './Workout/Workout'
import useStyles from './styles';
import { form, TextField, Button, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'; 
import { createWorkout } from '../../actions/workouts'

const Workouts = () => {
    const [workoutData, setWorkoutData] = useState({ creator: '', workout: '', status: false
    })
    const workouts = useSelector((state) => state.workouts )
    const classes = useStyles();
    const dispatch = useDispatch();

    console.log(workouts);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit")

        dispatch(createWorkout(workoutData))
    } 

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
                <TextField name="workout" variant="outlined" label="New workout" fullWidth  value={workoutData.workout} onChange={(e) => setWorkoutData({ ...workoutData, workout: e.target.value })}
                ></TextField>
                <Button className={classes.buttonSubmit} vaiant="contained" color="primary" size="large" type="submit" >
                Submit
            </Button>
            </form>


        </Grid>
        </>
    )
}

export default Workouts;