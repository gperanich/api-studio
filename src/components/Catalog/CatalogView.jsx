import React, { Component } from 'react';
import { Grid, Divider, Segment, Label, Dropdown } from 'semantic-ui-react';
import './catalog.css';

// import Loading from '../common/Loading';

class CatalogView extends Component {
    render() {
        return (
            <div className='catalog-view'>
                <Grid columns='equal' padded>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <h3>Catalog Nav/Search Bar</h3>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <h2>Filter</h2>
                            <Divider />
                            <Dropdown className='method-filter' text='Method' disabled={this.props.methodDropdown} options={this.props.methodOptions} onChange={(e, v) => { this.props.onMethodFilterChange(e, v) }} />
                            <Dropdown className='group-filter'  text='Grouping' disabled={this.props.groupingDropdown} >
                                <Dropdown.Menu>
                                    {(Object.keys(this.props.apiList).map((group) => {
                                        return (
                                            <Dropdown.Item key={group} value={group} text={group} onClick={(e, v) => { this.props.onGroupingFilterChange(e, v) }}/>
                                        )
                                    }))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid.Column>
                        <Grid.Column>
                            {Object.keys(this.props.apiList).map((category, index) => {
                                return (
                                    <div key={index} className='api-details'>
                                        <h2>{category}</h2>
                                        <Divider />
                                        {(this.props.apiList[category].map((api, i) => {
                                            if (api.method === 'GET') {
                                                return (
                                                    <Segment color='blue' raised className='api-segment' key={i}>
                                                        <Label color='blue' basic horizontal>{api.method}</Label>
                                                        <span className='api-url'>{api.url}</span>
                                                        <span className='api-description'>{api.description}</span>
                                                    </Segment>
                                                )
                                            }
                                            if (api.method === 'POST') {
                                                return (
                                                    <Segment color='green' raised className='api-segment' key={i}>
                                                        <Label color='green' basic horizontal>{api.method}</Label>
                                                        <span className='api-url'>{api.url}</span>
                                                        <span className='api-description'>{api.description}</span>
                                                    </Segment>
                                                )
                                            }
                                            if (api.method === 'PUT') {
                                                return (
                                                    <Segment color='orange' raised className='api-segment' key={i}>
                                                        <Label color='orange' basic horizontal>{api.method}</Label>
                                                        <span className='api-url'>{api.url}</span>
                                                        <span className='api-description'>{api.description}</span>
                                                    </Segment>
                                                )
                                            }
                                            return null;
                                        }))}
                                    </div>
                                )
                            })}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default CatalogView;