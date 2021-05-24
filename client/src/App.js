import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getWorkouts } from './actions/workouts';
import Workouts from './components/Workouts/Workouts';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkouts());
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static">
                <Typography className={classes.heading} variant="h2" align="center">Trening</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="strect" spacing="3" maxWidth="10px">
                        <Grid item xs={12} sm={7}>
                            <Workouts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <button>
                                heyo
                            </button>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;