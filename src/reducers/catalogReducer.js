import * as types from '../types/types';
import { getApiList } from '../apiList';

const catalogInitialState = {
    apiList: getApiList(),
    activeFilters: [],
    searchValue: ''
};

export const catalog = (state = catalogInitialState, action) => {
    switch (action.type) {
        case types.ADD_GROUPING_FILTER:
            return {
                ...state,
                activeFilters: action.payload,
                apiList: filterList(action.payload)
            }
        case types.ADD_METHOD_FILTER:
            return {
                ...state,
                activeFilters: action.payload,
                apiList: filterList(action.payload)
            }
        case types.DELETE_FILTER:
            return {
                ...state,
                activeFilters: action.payload,
                apiList: filterList(action.payload)
            }
        case types.SEARCH_AND_FILTER:
            return {
                ...state,
                searchValue: action.payload,
                apiList: filterList(state.activeFilters, action.payload)
            }
        default:
            return state
    }
}

function filterList(filterArr, searchValue) {
    console.log(searchValue);
    if (filterArr.length || searchValue) {
        let apiList = getApiList();
        for (var i = 0; i < filterArr.length; i++) {
            if (filterArr[i].type === 'group') {
                apiList = apiList.filter((api) => {
                    return api.group === filterArr[i].value;
                })
            }
            if (filterArr[i].type === 'method') {
                apiList.forEach((api) => {
                    api.value = api.value.filter((item) => {
                        return item.method === filterArr[i].value;
                    })
                })
            }
        }
        if (searchValue) {
            apiList.forEach((api) => {
                api.value = api.value.filter((item) => {
                    let bool = false;
                    for (var i = 0; i < Object.values(item).length; i++) {
                        let element = Object.values(item)[i];
                        if (element.toString().toLowerCase().indexOf(searchValue) > -1) {
                            bool = true;
                            break;
                        }
                    }
                    return bool;
                })
            })
        }
        return apiList;
    } else {
        const apiList = getApiList();
        return apiList;
    }
}