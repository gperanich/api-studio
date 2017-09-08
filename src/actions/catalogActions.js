import * as types from '../types/types';

function addGrouping(data) {
    return {
        type: types.ADD_GROUPING_FILTER,
        payload: data
    }
}

function addMethod(data) {
    return {
        type: types.ADD_METHOD_FILTER,
        payload: data
    }
}

function deleteFilter(data) {
    return {
        type: types.DELETE_FILTER,
        payload: data
    }
}

export function searchFilter(value) {
    return {
        type: types.SEARCH_AND_FILTER,
        payload: value
    }
}

export function addGroupingFilter(filter) {
    return (dispatch, getState) => {
        const {activeFilters} = getState().catalog;
        let filterArr = [...activeFilters, {type: 'group', value: filter}];
        dispatch(addGrouping(filterArr));
    }
}

export function addMethodFilter(filter) {
    return (dispatch, getState) => {
        const{activeFilters} = getState().catalog;
        let filterArr = [...activeFilters, {type: 'method', value: filter}];
        dispatch(addMethod(filterArr));
    }
}

export function deleteFilterAction(index) {
    return (dispatch, getState) => {
        const {activeFilters} = getState().catalog;
        let filterArr = [...activeFilters];
        filterArr.splice(index, 1);
        dispatch(deleteFilter(filterArr));
    }
}