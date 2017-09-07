import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSidebar, changeModal } from '../../actions/globalActions';

import { Menu, Icon, Divider } from 'semantic-ui-react';
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
        if (this.props.sidebarVisible === true) {
            return (
                <div>
                    <Menu className='sidebar-menu' vertical borderless >
                        <Link to='/' onClick={() => {this.toggleVisibility()}}>
                            <Menu.Item>
                                Home
                            </Menu.Item>
                        </Link>
                        <Link to='/' onClick={() => {this.toggleVisibility()}}>
                            <Menu.Item>
                                Dashboard
                            </Menu.Item>
                        </Link>
                        <Link to='/' onClick={() => {this.toggleVisibility()}}>
                            <Menu.Item>
                                Documentation
                            </Menu.Item> 
                        </Link>
                        <Link to='/demo' onClick={() => {this.toggleVisibility()}}>
                            <Menu.Item>
                                Demo
                            </Menu.Item>
                        </Link>
                        <Link to='/' onClick={() => {this.toggleVisibility()}}>
                            <Menu.Item>
                                Pricing
                            </Menu.Item>
                        </Link>
                        <Divider />
                        <Menu.Item onClick={() => {this.props.changeModal(!this.props.modalVisible)}} >
                            Login
                        </Menu.Item>
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
        sidebarVisible: state.global.sidebarVisible,
        modalVisible: state.global.modalVisible
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSidebar: (bool) => {
            dispatch(changeSidebar(bool))
        },
        changeModal: (bool) => {
            dispatch(changeModal(bool))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
