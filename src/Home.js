import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Ships from './pages/ships'
import Planets from './pages/planets'
import Peoples from './pages/peoples'
import Films from './pages/films'
import Species from './pages/species'
import Vehicles from './pages/vehicles'

import App from './App'

const Home = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/ships/:id' component={Ships}/>
                    <Route path='/peoples/:id' component={Peoples}/>
                    <Route path='/planets/:id' component={Planets}/>
                    <Route path='/species/:id' component={Species}/>
                    <Route path='/vehicles/:id' component={Vehicles}/>
                    <Route path='/films/:id' component={Films}/>
                </Switch>
            </Router>

        </div>
    );

};


export default Home;