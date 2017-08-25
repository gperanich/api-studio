import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import User from './userReducer';


const rootReducer = combineReducers({
    form,
    User
});

export default rootReducer;