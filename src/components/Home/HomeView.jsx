import React, { Component } from 'react';
import Masthead from '../common/masthead';
import Background from '../../images/Home/server-room.jpeg';
import FeatureGrid from '../common/feature-grid';

import './home.css';

class HomeView extends Component {

    render() {
        return (
            <div>
                <Masthead
                    text={'API Studio'}
                    subText={'Always Connected'}
                    image={Background}
                />
                <FeatureGrid

                />
            </div>
        );
    }
}

export default HomeView;