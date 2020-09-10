import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {LoginModal} from "./reducers/loginModal";
import {Hackathons} from "./reducers/hackathons";
import {Auth} from "./reducers/auth";
import {Feedbacks} from "./reducers/feedbacks";
import {Registration} from "./reducers/registration";
import {Reset} from "./reducers/resetPassword";


export const ConfigureStore = () => {
    return createStore(
        combineReducers({
            loginModal: LoginModal,
            hackathons: Hackathons,
            feedbacks: Feedbacks,
            auth: Auth,
            reset: Reset,
            registration: Registration
        }),
        applyMiddleware(thunk, logger)
    );
};
