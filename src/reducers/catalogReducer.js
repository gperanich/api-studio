import * as types from '../types/types';
import { getApiList } from '../apiList';

const catalogInitialState = {
    apiList: getApiList(),
    activeFilters: []
};

export const catalog = (state = catalogInitialState, action) => {
    switch (action.type) {
        case types.ADD_GROUPING_FILTER:
            return {
                ...state,
                activeFilters: action.payload
            }
        case types.ADD_METHOD_FILTER:
            return {
                ...state,
                activeFilters: action.payload
            }
        default:
            return state
    }
}

// function filterList(apiList, filterValueArr) {
//     if (filterValueArr.length) {
        
//     } else {
//         return apiList;
//     }
// }