import * as ActionTypes from '../ActionTypes';

export const Registration = (state = {
    isLoading: false,
    isRegistered: false,
    registering: false,
    emailSent: false,
    user: null,
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_REQUEST:
            return {...state,
                isLoading: true,
                isRegistered: false,
                emailSent: false,
                user: action.user
            };
        case ActionTypes.REGISTER_EMAIL:
            return {...state,
                isLoading: false,
                isRegistered: false,
                emailSent: true,
            };
        case ActionTypes.REGISTER_SUCCESS:
            return {...state,
                isLoading: false,
                isRegistered: true,
                errMess: '',
                emailSent: false
            };
        case ActionTypes.REGISTER_FAILURE:
            return {...state,
                isLoading: false,
                isRegistered: false,
                errMess: action.message
            };
        default:
            return state
    }
};
