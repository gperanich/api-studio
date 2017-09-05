import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeModal } from '../../actions/globalActions';
import { Button, Input, Modal, Header, Grid } from 'semantic-ui-react';
import './common.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: 'login'
        }
    }
    handleActiveFormChange = (value) => {
        this.setState({
            activeForm: value
        })
    }
    render() {
        return (
            <Modal
                open={this.props.modalVisible}
                onClose={() => { this.props.changeModal(!this.props.modalVisible) }}
                size='small'
            >
                {(this.state.activeForm === 'register') ? (
                    <Header textAlign='center'>Register</Header>
                ) : (
                        <Header textAlign='center'>Login</Header>
                    )}
                <Modal.Content>
                    {(this.state.activeForm === 'register') ? (
                        <Grid columns='equal' >
                            <Grid.Row>
                                <Grid.Column textAlign='center' >
                                    <Input placeholder='email' className='login-input' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    <Input placeholder='password' className='login-input' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    <Input placeholder='confirm password' className='login-input' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    <Button content='submit' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    <a className='login-text' onClick={() => { this.handleActiveFormChange('login') }} >Already have an account? Click here.</a>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    ) : (
                            <Grid columns='equal' >
                                <Grid.Row>
                                    <Grid.Column textAlign='center' >
                                        <Input placeholder='email' className='login-input' />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column textAlign='center'>
                                        <Input placeholder='password' className='login-input' />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column textAlign='center'>
                                        <Button content='submit' />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column textAlign='center'>
                                        <a className='login-text' onClick={() => { this.handleActiveFormChange('register') }} >Don't have an account? Click here.</a>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        )}
                </Modal.Content>
            </Modal >
        );
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
        modalVisible: state.global.modalVisible
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);