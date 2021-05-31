import React, { useState } from 'react';
import useStyles from './styles';
import { Grid, Box, Checkbox, Card, Typography, Button } from '@material-ui/core';
import { DeleteIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import { deleteWorkout, checkWorkout } from '../../../actions/workouts';

const Workout = ({ workout, setCurrentId }) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleCheckWorkout = async(e) => {
        e.preventDefault();

        if (workout.status) {
            workout.status = false;
        }
        else {
            workout.status = true
        }
        dispatch(checkWorkout(workout._id, workout));
    }

    return (
        <>
        
        <div className={classes.container} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onClick={ () => setCurrentId(workout._id)}>
            <div> 
                {show && <Button variant='contained' color='secondary' onClick={() => dispatch(deleteWorkout(workout._id))}> Slett </Button>}
            </div>
            <Card className={classes.card} >
            <div className={classes.overlay}>
                <Typography variant="h6" > {workout.title}
               </Typography>
            </div>
            <div className={classes.overlay2}>
            <Checkbox color="primary" className={classes.checkBox} onChange={handleCheckWorkout} checked={workout.status}> 

            </Checkbox>
            </div>


        </Card>
            
        </div>

        </>
    )
}

export default Workout;
