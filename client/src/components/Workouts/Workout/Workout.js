import React from 'react';
import useStyles from './styles';
import { Grid, Box, Checkbox } from '@material-ui/core';

const Workouts = () => {
    const classes = useStyles();

    return (
        <>
        <Grid container>
            <Grid item xs={6}>
                <Box className={classes.box}>
                    <h2> Workout </h2>
                </Box>  
            </Grid>
            <Grid item xs={4}>
                    <Checkbox className={classes.checkBox}> 

                    </Checkbox>
            </Grid>
        </Grid>
        </>
    )
}

export default Workouts;