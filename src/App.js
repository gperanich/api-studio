import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import './App.css';

import Navbar from './common/navbar';
import HomeContainer from './containers/Home/home-container';

const styles = {
  appbar: {
    backgroundColor: 'black'
  }
}

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
      logged: true  
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Router>
            <div>
              <Navbar
                logged={this.state.logged}
                handleToggle={this.handleToggle}
              />
              <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({ open })}
              >
                <MenuItem onTouchTap={this.handleClose}><Link to='/'>Home</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Documentation</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Support</MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.handleClose}>Register</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Log In</MenuItem>
              </Drawer>

              <Route exact path="/" component={HomeContainer} />
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
