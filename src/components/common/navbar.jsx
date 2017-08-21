import React, { Component } from 'react';

import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            logged: true
        };
    }

    render() {
        return (
            <Menu stackable inverted className='navbar' size={'huge'} color={'red'} >
                <Link to='/'>
                    <Menu.Item className='menu-item'>
                        API Studio
                        </Menu.Item>
                </Link>
            </Menu>
        );
    }
}

export default Navbar;