import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Gnome from './components/Gnome'
import Gnomes from './components/Gnomes'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
    return(
        <Router>
            <div className="container">
                <Navbar />
                <Switch>
                    <Route path="/gnomes/:id">
                        <Gnome />
                    </Route>
                    <Route path="/gnomes">
                        <Gnomes />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
