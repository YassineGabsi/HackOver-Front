import * as ActionTypes from '../ActionTypes';

export const Hackathons = (state = {
    hackathons: [],
    isLoading: false,
    isLoaded: false,
    isAdded: false,
    isUpdated: false,
    errMess: null,
}, action) => {
    switch(action.type) {
        case ActionTypes.LIST_HACKATHONS:
            return {...state, isLoading: false, isLoaded: false, errMess: null, hackathons: action.hackathons.data };

        case ActionTypes.HACKATHONS_LOADED:
            return {...state, isLoading: false, isLoaded: true, errMess: null};

        case ActionTypes.HACKATHON_LOADING:
            return {...state, isLoading: true, errMess: null};

        case ActionTypes.HACKATHON_ADDED:
            return {...state, isLoading: false, errMess: null, isAdded: true};

        case ActionTypes.HACKATHON_UPDATED:
            return {...state, isLoading: false, errMess: null, isUpdated: true};

        case ActionTypes.HACKATHON_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
