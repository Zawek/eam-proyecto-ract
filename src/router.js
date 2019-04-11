import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './containers/Login/Login';
import Post from './containers/Posts/Posts'

const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/post" exact component={Post}/>
        </Switch>
    </BrowserRouter>
);

export default Router;