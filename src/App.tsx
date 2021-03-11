import React, {useEffect, useState} from 'react';
//import './App.css';
import {Route, RouteComponentProps, Switch} from 'react-router-dom'
import HomePage from "./components/homePage";
import './stylesheets/App.sass'
import TheNavBar from "./components/theNavBar";
import TheFooter from "./components/theFooter";
import VolunteersPage from "./components/volunteersPage";


const App = () => {

    return (
        <div className="App">
            <TheNavBar/>
            <div className='app-container'>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/volunteers' component={VolunteersPage}/>
                </Switch>
            </div>
            <TheFooter/>
        </div>
    )
};

export default App;
