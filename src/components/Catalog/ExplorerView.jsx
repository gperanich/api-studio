import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';

class ExplorerView extends Component {
    render() {
        return (
            <Grid columns='equal'>
                <Grid.Row>
                    {this.props.apiList.map((api, index) => {
                        return (
                            <Grid.Column width={8} key={index} >
                                <Card raised fluid style={{height:'100px', marginBottom: '25px', cursor:'pointer'}}>
                                    <Card.Content>
                                        <Card.Header>
                                            {api.group}
                                        </Card.Header>
                                        <Card.Description>
                                            {api.description}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        )
                    })}
                </Grid.Row>
            </Grid>
        );
    }
}

export default ExplorerView;