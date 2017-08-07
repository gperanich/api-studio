import React, { Component } from 'react';
import Masthead from '../common/masthead';
import Background from '../../images/Home/server-room.jpeg';
import FeatureGrid from '../common/feature-grid';

class HomeView extends Component {

    render() {
        return (
            <div>
                <Masthead
                    text={'Your Company Name'}
                    subText={'Your Company Slogan'}
                    image={Background}
                />
                <FeatureGrid

                />
            </div>
        );
    }
}

export default HomeView;