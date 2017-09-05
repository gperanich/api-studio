import * as types from '../types/types';

export function changeSidebar(bool) {
    return {
        type: types.SIDEBAR_VISIBLE,
        payload: bool
    }
}

export function changeModal(bool) {
    return {
        type: types.MODAL_VISIBLE,
        payload: bool
    }
}