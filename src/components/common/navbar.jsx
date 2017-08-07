import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Drawer from './drawer';

const styles = {
    appbar: {
        backgroundColor: 'black'
    }
}

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" />
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton ><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        iconStyle={{ color: 'white' }}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            logged: true
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });
    onRequestChange = (open) => { this.setState({ open }) };

    render() {
        return (
            <div>
                <AppBar
                    title="Your Logo"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={this.props.logged ? <Logged /> : <Login />}
                    style={styles.appbar}
                />
                <Drawer
                    open={this.state.open}
                    handleClose={this.handleClose}
                    onRequestChange={this.onRequestChange}
                />
            </div>
        );
    }
}

export default Navbar;