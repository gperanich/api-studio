import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSidebar } from '../../actions/globalActions';

import { Menu, Icon, Sidebar, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: true
        };
    }

    toggleVisibility = () => {
        this.props.changeSidebar(!this.props.sidebarVisible);
    }

    render() {
        const { visible } = this.props.sidebarVisible;
        return (
            <Menu inverted borderless className='navbar' size={'huge'} widths={16} >
                <Icon name='sidebar' className='sidebar-button' onClick={this.toggleVisibility} />
                <Link to='/'>
                    <Menu.Item className='menu-item'>
                        API Studio
                        </Menu.Item>
                </Link>
            </Menu >
        );
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