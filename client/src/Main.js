import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import Series from './Series'

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/movies' component={Movies}/>
        <Route path='/series' component={Series}/>
    </Switch>
)


export default Main
