import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'

const App = () => {
    const state = null;

    return (
        <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Container>
        
        </BrowserRouter>
    )
}

export default App;