import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/constants';
import createActionBuffer from 'redux-action-buffer';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [createActionBuffer(REHYDRATE), thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = composeEnhancers(
    applyMiddleware(...middleware),
    autoRehydrate()
)(createStore)(rootReducer);

persistStore(store);

export default store;