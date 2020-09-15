import * as ActionTypes from '../ActionTypes';

export  const  ChangePassword = (state = {
    isLoading: false,
    isPassChanged: false,
    isPasswordWrong: false,
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_CHANGE_PASS:
            return {...state,
                isLoading: true,
                isPassChanged: false,
                isPasswordWrong: false,
            };

        case ActionTypes.CHANGE_PASS_SUCCESS:
            return {...state,
                isLoading: false,
                isPassChanged: true,
                isPasswordWrong: false,
            };
        case ActionTypes.PASS_FAILURE:
            return {...state,
                isLoading: false,
                isPassChanged: false,
                isPasswordWrong: true,
                errMess: action.message
            };
        default:
            return state
    }
};
