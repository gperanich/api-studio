import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSidebar } from '../../actions/globalActions';

import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchActive: false
        }
    }

    toggleVisibility = () => {
        this.props.changeSidebar(!this.props.sidebarVisible);
    }
    closeSidebar = () => {
        this.props.changeSidebar(false);
    }
    toggleSearch = () => {
        this.setState({
            searchActive: !this.state.searchActive
        })
    }

    render() {
        console.log(this.props);
        if (this.props.sidebarVisible === true) {
            return (
                <div>
                    <Menu className='sidebar-menu' vertical borderless >
                        <Link to='/'>
                            <Menu.Item name='home'>
                                Home
                            </Menu.Item>
                        </Link>
                        <Link to='/'>
                            <Menu.Item name='gamepad'>
                                APIs
                            </Menu.Item>
                        </Link>
                        <Link to='/'>
                            <Menu.Item name='gamepad'>
                                Documentation
                            </Menu.Item>
                        </Link>
                        <Link to='/'>
                            <Menu.Item name='camera'>
                                Pricing
                            </Menu.Item>
                        </Link>
                    </Menu>
                    <div onClick={() => { this.closeSidebar() }}>
                        <Menu inverted borderless className='navbar-transformed' size='huge' >
                            <Menu.Menu position='left'>
                                <Menu.Item className='menu-item'>
                                    <Icon name='sidebar' className='sidebar-button' id='sidebar-button' onClick={this.toggleVisibility} />
                                </Menu.Item>
                            </Menu.Menu>
                            <Link to='/'>
                                <Menu.Item className='menu-item'>
                                    API Studio
                                    </Menu.Item>
                            </Link>
                            <Menu.Menu position='right'>
                                <Menu.Item className='menu-item'>
                                    <Icon name='search' className='search-icon' onClick={() => { this.toggleSearch() }} />
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu >
                        <div className='transformed-div'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Menu inverted borderless className='navbar' size='huge' fixed='top'>
                        <Menu.Menu position='left'>
                            <Menu.Item className='menu-item'>
                                <Icon name='sidebar' className='sidebar-button' id='sidebar-button' onClick={this.toggleVisibility} />
                            </Menu.Item>
                        </Menu.Menu>
                        <Link to='/'>
                            <Menu.Item className='menu-item'>
                                API Studio
                        </Menu.Item>
                        </Link>
                        <Menu.Menu position='right'>
                            <Menu.Item className='menu-item'>
                                <Icon name='search' className='search-icon' onClick={() => { this.toggleSearch() }} />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu >
                    <div className='content-div'>
                        {this.props.children}
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sidebarVisible: state.global.sidebarVisible
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSidebar: (bool) => {
            dispatch(changeSidebar(bool))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
