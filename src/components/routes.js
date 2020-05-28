import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './main/routes';
import Header from './header/header'

const Routes = ({ match }) => (
    <div id="mainRoutes">
        <Header />
        <Switch>
            <Route exact path={`${match.url}`} component={Main} />
            <Route path={`${match.url}main`} component={Main} />
        </Switch>
    </div>
);

export default Routes;