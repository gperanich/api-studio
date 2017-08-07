import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import homeContainer from './components/Home/HomeIndex';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={homeContainer} />
            </Switch>
        )
    }
}

export default Routes;