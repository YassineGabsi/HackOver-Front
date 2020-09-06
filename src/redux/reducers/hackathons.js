import * as ActionTypes from '../ActionTypes';
import { HACKATHONS } from "../../shared/hackathons";

export const Hackathons = (state = {
    hackathons: [],
    isLoading: false,
    isLoaded: false,
    errMess: null,
}, action) => {
    switch(action.type) {
        case ActionTypes.LIST_HACKATHONS:
            return {...state, isLoading: false, isLoaded: true, errMess: null, hackathons: action.hackathons.data };

        case ActionTypes.HACKATHON_LOADING:
            return {...state, isLoading: true, errMess: null};

        case ActionTypes.HACKATHON_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
