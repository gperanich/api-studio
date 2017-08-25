import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './navbar.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer-div'>
                <p className='footer-text'><Icon name='copyright'/>API Studio 2017</p>  
            </div>
        );
    }
}

export default Footer;