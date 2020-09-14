import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {LoginModal} from "./reducers/loginModal";
import {Hackathons} from "./reducers/hackathons";
import {Auth} from "./reducers/auth";
import {Feedbacks} from "./reducers/feedbacks";
import {Registration} from "./reducers/registration";
import {Reset} from "./reducers/resetPassword";
import {ProfileUpdate} from "./reducers/profileUpdate";
import {PictureUpdate} from "./reducers/pictureUpdate";
import {Participation} from "./reducers/participation";


export const ConfigureStore = () => {
    return createStore(
        combineReducers({
            loginModal: LoginModal,
            hackathons: Hackathons,
            feedbacks: Feedbacks,
            auth: Auth,
            reset: Reset,
            profileUpdate: ProfileUpdate,
            pictureUpdate: PictureUpdate,
            registration: Registration,
            participation: Participation,
        }),
        applyMiddleware(thunk, logger)
    );
};
