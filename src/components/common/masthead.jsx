import React, { Component } from 'react';

import './common.css';

const styles = {
    header: {
        paddingTop: '20vh',
        color: 'white',
        fontSize: '5em'
    },
    subheader: {
        color: 'white',
        fontSize: '2em'
    }
}

class Masthead extends Component {
    render() {
        return (
            <div className='background'>
                <div style={styles.header} >{this.props.text}</div>
                <div style={styles.subheader} >{this.props.subText}</div>
            </div>
        );
    }
}

export default Masthead;