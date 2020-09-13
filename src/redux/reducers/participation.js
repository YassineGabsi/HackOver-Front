import * as ActionTypes from '../ActionTypes';

export const Participation = (state = {
    hackathons: [],
    isParticipated: false,
    isDisParticipated: false,
    isLoading: false,
    isDeleted: false,
    isLoaded: false,
    errMess: null,
}, action) => {
    switch(action.type) {
        case ActionTypes.PARTICIPATION_SUCCESS:
            return { ...state, isLoading : false, isParticipated: true, errMess: null};

        case ActionTypes.DISPARTICIPATION_SUCCESS:
            return { ...state, isLoading : false, isDisParticipated: true, errMess: null};

        case ActionTypes.REQUEST_PARTICIPATION:
            return {...state, isLoading : true, isParticipated: false, errMess: null};

        case ActionTypes.PARTICIPATION_FAILURE:
            return {...state, isLoading : false, isParticipated: false, isLoaded: true,  errMess: action.message};

        case ActionTypes.LIST_PARTICIPATIONS:
            return {...state, isLoading : false, isParticipated: false, isLoaded: true,  errMess: null, hackathons: action.data.data};

        case ActionTypes.DELETE_PARTICIPATION:
            return {...state, isLoading : false, isParticipated: false,  isDeleted: true, errMess: null};

        default:
            return state;
    }
};
