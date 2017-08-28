import React, { Component } from 'react';
import './home.css';

import { Grid, Button, Card, List } from 'semantic-ui-react';

import './home.css';

class HomeView extends Component {

    render() {
        return (
            <Grid columns='equal' stackable>
                <Grid.Row className='home-background'>
                    <Grid.Column className='header-jumbo' >
                        {/*<p className='super-header'>Discover / Catalog / Design / Connect</p>*/}
                        <p className='header-main' >API Studio</p>
                        <p className='sub-header' >Discover / Catalog / Design / Connect</p>
                        {/*<p className='sub-header' >It's A Big World; Stay Connected</p>*/}
                        <div style={{ textApgn: 'center' }}>
                            <Button className='home-buttons' content='Learn More' />
                            <Button className='home-buttons' content='Sign Up / Sign In' />
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column width={8} className='swagger-example'>
                        <div></div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div className='catalog-info'>
                            <List size='large'>
                                <List.Item className='list-item'>
                                    <List.Content>
                                        <List.Header className='black-text'>Catalog</List.Header>
                                        <List.Description>An intuitive system for uploading and showcasing your APIs</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className='list-item'>
                                    <List.Content>
                                        <List.Header className='black-text'>Discover</List.Header>
                                        <List.Description>Our catalog is easy to navigate, and contains many tools for client discovery</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className='list-item'>
                                    <List.Content>
                                        <List.Header className='black-text'>Connect</List.Header>
                                        <List.Description>When your customer sees something they like, they can connect</List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row reversed='mobile vertically'>
                    <Grid.Column width={8}>
                        <div className='catalog-info' >
                            <List size='large'>
                                <List.Item className='list-item'>
                                    <List.Content>
                                        <List.Header className='black-text'>CMS</List.Header>
                                        <List.Description>Customized control over your content</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className='list-item'>
                                    <List.Content>
                                        <List.Header className='black-text'>Design</List.Header>
                                        <List.Description>You want a specific look and feel to your site? You got it</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className='list-item'>
                                    <List.Content>
                                        <List.Header className='black-text'>Control</List.Header>
                                        <List.Description>Total control over the flow of information</List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={8} className='cms-example'>
                        <div ></div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default HomeView;