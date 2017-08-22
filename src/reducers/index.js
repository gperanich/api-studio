import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {global} from './globalReducer';

const rootReducer = combineReducers({
    form,
    global
});

export default rootReducer;