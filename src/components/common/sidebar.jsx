import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, Segment } from 'semantic-ui-react';

class SidebarMenu extends Component {
    render() {
        const visible = this.props.sidebarVisible;
        console.log(this.props);
        return (
            <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical >
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
                        <Menu.Item name='camera'>
                            Testing
                    </Menu.Item>
                    </Link>
                </Sidebar>
                <Sidebar.Pusher>
                    {this.props.children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sidebarVisible: state.global.sidebarVisible
    }
}

export default connect(mapStateToProps)(SidebarMenu);