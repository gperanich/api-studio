import * as types from '../types/types';

export function addGrouping(data) {
    return {
        type: types.ADD_GROUPING_FILTER,
        payload: data
    }
}

export function addMethod(data) {
    return {
        type: types.ADD_METHOD_FILTER,
        payload: data
    }
}

export function addGroupingFilter(filter) {
    console.log('fired grouping filter action!');
    return (dispatch, getState) => {
        const {activeFilters} = getState().catalog;
        let filterArr = [...activeFilters, {type: 'group', value: filter}];
        dispatch(addGrouping(filterArr));
    }
}

export function addMethodFilter(filter) {
    console.log('fired method filter action!');
    return (dispatch, getState) => {
        const{activeFilters} = getState().catalog;
        let filterArr = [...activeFilters, {type: 'method', value: filter}];
        dispatch(addMethod(filterArr));
    }
}