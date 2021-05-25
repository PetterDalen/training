import React from 'react';
import useStyles from './styles';
import { Grid, Box, Checkbox } from '@material-ui/core';

const Workout = ({ workout }) => {
    const classes = useStyles();

    return (
        <>
        <Grid container>
            <Grid item xs={6}>
                <Box className={classes.box}>
                {console.log("workout in design")}
                    <h2> {workout.title} </h2>
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

export default Workout;