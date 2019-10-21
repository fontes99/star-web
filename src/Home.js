import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Ships from './pages/ships'
// import Planets from './pages/planets'
// import Peoples from './pages/peoples'
// import Films from './pages/films'
// import Species from './pages/species'
// import Vehicles from './pages/vehicles'

import App from './App'

const Home = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/ships' exact component={Ships}/>
                    {/* <Route path='/planets' exact component={Planets}/>
                    <Route path='/peoples' exact component={Peoples}/>
                    <Route path='/films' exact component={Films}/>
                    <Route path='/species' exact component={Species}/>
                    <Route path='/vehicles' exact component={Vehicles}/> */}
                </Switch>
            </Router>

        </div>
    );

};


export default Home;