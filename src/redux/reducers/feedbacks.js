import * as ActionTypes from '../ActionTypes';

export const Feedbacks = (state = {
    feedbacks: [],
    isLoading: false,
    isLoaded: false,
    isDeleted: false,
    isAdded: false,
    isUpdated: false,
    errMess: null,
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return { ...state, feedbacks: state.feedbacks.concat(feedback)};

        case ActionTypes.REQUEST_FEEDBACKS:
            return { ...state, isLoading: true, isLoaded: false };

        case ActionTypes.FEEDBACKS_SUCCESS:
            return { ...state, isLoading: false, isLoaded: true, isAdded: true };

        case ActionTypes.LIST_FEEDBACKS:
            return { ...state, isLoading: true, isLoaded: false, feedbacks: action.feedbacks.data };

        case ActionTypes.DELETE_FEEDBACK:
            return { ...state, isLoading: false, isLoaded: true, isDeleted: true};

        case ActionTypes.UPDATE_FEEDBACK:
            return { ...state, isLoading: false, isLoaded: true, isDeleted: false, isUpdated: true};

        case ActionTypes.FEEDBACK_FAILED:
            return {...state, isLoading: false, isLoaded: true, errMess: action.message};

        default:
            return state;
    }
};
