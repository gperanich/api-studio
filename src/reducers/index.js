import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {global} from './globalReducer';
import {catalog} from './catalogReducer';

const rootReducer = combineReducers({
    form,
    global,
    catalog
});

export default rootReducer;