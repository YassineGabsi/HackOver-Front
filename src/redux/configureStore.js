import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    return createStore(
        combineReducers({}),
        applyMiddleware(thunk, logger)
    );
};
