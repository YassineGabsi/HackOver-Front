import * as ActionTypes from '../ActionTypes';

export  const  ChangeEmail = (state = {
    isLoading: false,
    isEmailGet: false,
    isEmailChanged: false,
    isEmailWrong: false,
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_CHANGE_EMAIL:
            return {...state,
                isLoading: true,
                isEmailGet: false,
                isEmailChanged: false
            };

        case ActionTypes.OLD_EMAIL_SUCCESS:
            return {...state,
                isLoading: false,
                isEmailGet: true,
                isEmailChanged: false
            };
        case ActionTypes.CHANGE_EMAIL_SUCCESS:
            return {...state,
                isLoading: false,
                isEmailGet: false,
                isEmailChanged: true
            };

        case ActionTypes.MAIL_FAILURE:
            return {...state,
                isLoading: false,
                isEmailGet: false,
                isEmailChanged: false,
                isEmailWrong: true,
                errMess: action.message
            };
        default:
            return state
    }
};
