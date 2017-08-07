import React, { Component } from 'react';

const styles = {
    header: {
        paddingTop: '20vh',
        color: 'white',
        fontSize: '2em'
    },
    subheader: {
        color: 'white',
        fontSize: '1em'
    }
}

class Masthead extends Component {
    render() {
        const backgroundStyle = {
            // backgroundImage: `url(${this.props.image})`,
            backgroundColor: '#C2C2C2',
            backgroundSize: "100% 100%",
            height: '45vh'
        }
        return (
            <div style={backgroundStyle}>
                <div style={styles.header} >{this.props.text}</div>
                <div style={styles.subheader} >{this.props.subText}</div>
            </div>
        );
    }
}

export default Masthead;