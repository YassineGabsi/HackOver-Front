import * as ActionTypes from '../ActionTypes';

export  const  Reset = (state = {
    isLoading: false,
    isEmailGet: false,
    isPassReset: false,
    isEmailWrong: false,
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_EMAIL:
            return {...state,
                isLoading: true,
                isEmailGet: false,
                isPassReset: false
            };

        case ActionTypes.EMAIL_SUCCESS:
            return {...state,
                isLoading: false,
                isEmailGet: true,
                isEmailWrong: false,
                isPassReset: false
            };
        case ActionTypes.RESET_SUCCESS:
            return {...state,
                isLoading: false,
                isEmailGet: false,
                isPassReset: true
            };

        case ActionTypes.EMAIL_FAILURE:
            return {...state,
                isLoading: false,
                isEmailGet: false,
                isPassReset: false,
                isEmailWrong: true,
                errMess: action.message
            };
        default:
            return state
    }
};
