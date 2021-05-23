import { Box, Checkbox, Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Workout = () => {
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

export default Workout;