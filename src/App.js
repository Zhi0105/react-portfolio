import React from 'react'
import {Switch, Route } from 'react-router-dom'


// COMPONENTS
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Opinion from './components/Opinion'




const App = () => {
    return (

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/project" component={Projects}/>
                <Route exact path="/comment" component={Opinion}/>
            </Switch> 
    )   
}

export default App