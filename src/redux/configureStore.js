import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {LoginModal} from "./reducers/loginModal";
import {Hackathons} from "./reducers/hackathons";
import {Auth} from "./reducers/auth";


export const ConfigureStore = () => {
    return createStore(
        combineReducers({
            loginModal: LoginModal,
            hackathons: Hackathons,
            auth: Auth
        }),
        applyMiddleware(thunk, logger)
    );
};
