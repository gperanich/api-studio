import * as types from '../types/types';

const globalInitialState = {
    sidebarVisible: false
}
export const global = (state = globalInitialState, action) => {
    switch (action.type) {
        case types.SIDEBAR_VISIBLE:
            return {
                ...state,
                sidebarVisible: action.payload
            }
        default:
            return state
    }
}