import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/catalogActions';
import { Grid, Checkbox, Input } from 'semantic-ui-react';

import CatalogView from './CatalogView';
import ExplorerView from './ExplorerView';

const methodOptions = [
    {
        key: 'GET',
        value: 'GET',
        text: 'GET'
    },
    {
        key: 'POST',
        value: 'POST',
        text: 'POST'
    },
    {
        key: 'PUT',
        value: 'PUT',
        text: 'PUT'
    }
];

class CatalogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            methodDropdown: false,
            groupingDropdown: false,
            toggleView: 'Catalog View'
        }
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.activeFilters.length !== this.props.activeFilters.length) {
            let method = false;
            let grouping = false;
            this.props.activeFilters.forEach((filter) => {
                if (filter.type === 'group') {
                    grouping = true;
                }
                if (filter.type === 'method') {
                    method = true;
                }
            })
            this.setState({
                methodDropdown: method,
                groupingDropdown: grouping
            })
        }
    }
    onMethodFilterChange = (e, v) => {
        this.props.addMethodFilter(v.value);
    }
    onGroupingFilterChange = (e, v) => {
        this.props.addGroupingFilter(v.value);
    }
    onDeleteFilter = (index) => {
        this.props.deleteFilter(index);
    }
    onToggleChange = (e, v) => {
        if (v.checked === true) {
            this.setState({
                toggleView: 'Explorer View'
            })
        } else {
            this.setState({
                toggleView: 'Catalog View'
            })
        }
    }
    handleSearchChange = (e) => {
        this.props.searchFilter(e.target.value);
    }
    render() {
        console.log(this.props);
        return (
            <div className='catalog-view'>
                <Grid padded columns='equal'>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <h3>Catalog Nav/Search Bar</h3>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            {this.state.toggleView === 'Catalog View' && (
                                <Input className='catalog-search' icon='search' placeholder='Start typing...' onChange={this.handleSearchChange} value={this.props.searchValue}/>
                            )}
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <div>
                                <Checkbox className='view-toggle' toggle onChange={(e, v) => { this.onToggleChange(e, v) }} />
                                <p className='toggle-text'>{this.state.toggleView}</p>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            {(this.state.toggleView === 'Catalog View') && (
                                <CatalogView
                                    apiList={this.props.apiList}
                                    methodOptions={methodOptions}
                                    onMethodFilterChange={this.onMethodFilterChange}
                                    onGroupingFilterChange={this.onGroupingFilterChange}
                                    onDeleteFilter={this.onDeleteFilter}
                                    activeFilters={this.props.activeFilters}
                                    methodDropdown={this.state.methodDropdown}
                                    groupingDropdown={this.state.groupingDropdown}
                                />
                            )}
                            {(this.state.toggleView === 'Explorer View') && (
                                <ExplorerView
                                    apiList={this.props.apiList}
                                />
                            )}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        apiList: state.catalog.apiList,
        activeFilters: state.catalog.activeFilters,
        searchValue: state.catalog.searchValue
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addGroupingFilter: (value) => {
            dispatch(actions.addGroupingFilter(value))
        },
        addMethodFilter: (value) => {
            dispatch(actions.addMethodFilter(value))
        },
        deleteFilter: (index) => {
            dispatch(actions.deleteFilterAction(index))
        },
        searchFilter: (value) => {
            dispatch(actions.searchFilter(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogIndex);