import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/homePage';
import CryptosPage from '../pages/cryptosPage';

const layout = () => (
    <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/cryptos" component={ CryptosPage } />
    </Switch>
)

export default layout;
