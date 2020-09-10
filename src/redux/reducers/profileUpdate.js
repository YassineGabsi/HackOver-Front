import * as ActionTypes from '../ActionTypes';

export  const  ProfileUpdate = (state = {
    isLoading: false,
    isUpdated: false,
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_REQUEST:
            return {...state,
                isLoading: true,
                isUpdated: false,
            };
        case ActionTypes.UPDATE_SUCCESS:
            return {...state,
                isLoading: false,
                isUpdated: true,
                errMess: null,
            };
        case ActionTypes.UPDATE_FAILURE:
            return {...state,
                isLoading: false,
                isUpdated: false,
                errMess: action.message
            };
        default:
            return state
    }
};
