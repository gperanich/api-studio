import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeIndex from './components/Home/HomeIndex';
import CatalogIndex from './components/Catalog/CatalogIndex';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomeIndex} />
                <Route exact path='/demo' component={CatalogIndex} />
            </Switch>
        )
    }
}

export default Routes;