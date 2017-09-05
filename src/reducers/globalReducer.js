import * as types from '../types/types';

const globalInitialState = {
    sidebarVisible: false,
    modalVisible: false
}
export const global = (state = globalInitialState, action) => {
    switch (action.type) {
        case types.SIDEBAR_VISIBLE:
            return {
                ...state,
                sidebarVisible: action.payload
            }
        case types.MODAL_VISIBLE: 
            return {
                ...state,
                modalVisible: action.payload
            }
        default:
            return state
    }
}