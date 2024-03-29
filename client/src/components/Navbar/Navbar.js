import React from 'react'
import { AppBar, Toolbar, Avatar, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const user = null;

  return ( 
    <AppBar className={classes.appBar} position="static">
        <div className={classes.brandContainer} > 
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Trening</Typography>
        </div>
    </AppBar>

  )}

export default Navbar;