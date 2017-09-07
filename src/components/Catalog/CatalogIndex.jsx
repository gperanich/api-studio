import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/catalogActions';

import CatalogView from './CatalogView';

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
            groupingDropdown: false
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
    render() {
        console.log(this.props);
        return (
            <div>
                <CatalogView
                    apiList={this.props.apiList}
                    methodOptions={methodOptions}
                    onMethodFilterChange={this.onMethodFilterChange}
                    onGroupingFilterChange={this.onGroupingFilterChange}
                    activeFilters={this.props.activeFilters}
                    methodDropdown={this.state.methodDropdown}
                    groupingDropdown={this.state.groupingDropdown}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        apiList: state.catalog.apiList,
        activeFilters: state.catalog.activeFilters
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addGroupingFilter: (value) => {
            dispatch(actions.addGroupingFilter(value))
        },
        addMethodFilter: (value) => {
            dispatch(actions.addMethodFilter(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogIndex);