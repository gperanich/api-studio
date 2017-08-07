import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Link }  from 'react-router-dom';

class DrawerComponent extends Component {
    render() {
        return (
            <Drawer
                docked={false}
                width={200}
                open={this.props.open}
                onRequestChange={this.props.onRequestChange}
            >
                <MenuItem onTouchTap={this.props.handleClose}><Link to='/'>Home</Link></MenuItem>
                <MenuItem onTouchTap={this.props.handleClose}>Documentation</MenuItem>
                <MenuItem onTouchTap={this.props.handleClose}>Support</MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.props.handleClose}>Register</MenuItem>
                <MenuItem onTouchTap={this.props.handleClose}>Log In</MenuItem>
            </Drawer>
        );
    }
}

export default DrawerComponent;