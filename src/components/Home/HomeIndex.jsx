import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeModal } from '../../actions/globalActions';
import HomeView from './HomeView';

class HomeIndex extends Component {    
    render() {
        return (
            <div>
                <HomeView />
            </div>        
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeModal: (bool) => {
            dispatch(changeModal(bool))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        modalVisible: state.modalVisible
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);