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
        case types.DELETE_FILTER:
            return {
                ...state,
                activeFilters: action.payload
            }
        default:
            return state
    }
}

// function filterList(apiList, filterArr) {
//     if (filterArr.length) {
//         let newList = [];
//         for (var i = 0; i < filterArr.length; i++) {
//             if (i=== 0) {
                
//             }
//         }
//     } else {
//         return apiList;
//     }
// }