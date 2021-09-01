
import Workouts from '../Workouts/Workouts.js'
import WorkoutInfo from '../WorkoutInfo/WorkoutInfo.js'

import useStyles from './styles';
import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getWorkouts } from '../../actions/workouts';


import Form from '../Form/Form.js';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkouts());
    }, [dispatch]); 

  return ( 

<Grow in>
<Container >
    <Grid container justify="space-between" alignItems="strect" spacing="3" maxWidth="10px">
        <Grid item xs={12} sm={4}>
            <Workouts setCurrentId={setCurrentId}/>
        </Grid>
        <Grid item xs={12} sm={4}>
            <WorkoutInfo currentId={currentId} setCurrentId={setCurrentId}/>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Form />
        </Grid>
    </Grid>
</Container>
</Grow>

  )}

export default Home;


