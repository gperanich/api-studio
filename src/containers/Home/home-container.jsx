import React, { Component } from 'react';
import HomeView from '../../views/Home/home-view';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <HomeView />
            </div>        
        )
    }
}

export default HomeContainer;