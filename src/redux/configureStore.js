import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {LoginModal} from "./reducers/loginModal";


export const ConfigureStore = () => {
    return createStore(
        combineReducers({
            loginModal: LoginModal
        }),
        applyMiddleware(thunk, logger)
    );
};
