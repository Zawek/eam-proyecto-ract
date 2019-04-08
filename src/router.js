import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './containers/Login/Login'

const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/login" exact component={Login}/>
        </Switch>
    </BrowserRouter>
);

export default Router;