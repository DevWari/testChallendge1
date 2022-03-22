import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import CustomRoute from './Route';

//Containers
import {
  Users,
  UserDetail
} from '../containers';

/**
 * All of the routes
 */
const Index = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Users} />            
            <Route path="/detail/:id?" component={UserDetail} />                
        </Switch>
  </BrowserRouter>
);

export default Index;