import React, { useState } from 'react';
import useStyles from './styles';
import { Grid, Box, Checkbox, Card, Typography, Button } from '@material-ui/core';
import { DeleteIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import { deleteWorkout } from '../../../actions/workouts';

const Workout = ({ workout }) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
        
        <div className={classes.container} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} >
            <div> 
                {show && <Button variant='contained' color='secondary' onClick={() => dispatch(deleteWorkout(workout._id))}> delete</Button>}
            </div>
        <Card className={classes.card} >
            <div className={classes.overlay}>
                <Typography variant="h6" > {workout.title}
               </Typography>
            </div>
            <div className={classes.overlay2}>
            <Checkbox className={classes.checkBox}> 

            </Checkbox>
            </div>


        </Card>
            
        </div>

        </>
    )
}

export default Workout;
