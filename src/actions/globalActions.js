import * as types from '../types/types';

export function changeSidebar(bool) {
    return {
        type: types.SIDEBAR_VISIBLE,
        payload: bool
    }
}