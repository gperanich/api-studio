import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
 
class Loading extends Component {
    render() {
        return (
            <Dimmer active page>
                <Loader size='massive'>Loading</Loader>
            </Dimmer>
        );
    }
}

export default Loading;