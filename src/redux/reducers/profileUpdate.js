import * as ActionTypes from '../ActionTypes';

export  const ProfileUpdate  = (state = {
    isLoading: false,
    isUpdated: false,
    isGet: false,
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_USER:
            return {...state,
                isLoading: true,
                isGet: false,
            };
        case ActionTypes.USER_SUCCESS:
            return {...state,
                isLoading: false,
                isGet: true,
            };
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
