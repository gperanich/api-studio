import React, { Component } from 'react';
import './home.css';

class HomeView extends Component {

    render() {
        return (
            <div>
                <div className='home-background'>
                    <p className='header' >API Studio</p>
                    <p className='sub-header' >Stay Connected</p>
                </div>
            </div>
        );
    }
}

export default HomeView;