import * as ActionTypes from '../ActionTypes';

export  const  Auth = (state = {
    isLoading: false,
    isAuthenticated: localStorage.getItem('accessToken') ? true : false,
    accessToken: localStorage.getItem('accessToken'),
    user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: false,
                user: action.creds
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {...state,
                isLoading: false,
                isAuthenticated: true,
                errMess: null,
                accessToken: action.accessToken,
                user: action.user
            };
        case ActionTypes.UPDATE_PROFILE:
            return {...state,
                isLoading: false,
                isAuthenticated: true,
                errMess: null,
                user: action.user
            };
        case ActionTypes.LOGIN_FAILURE:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                errMess: action.message
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: true
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                acessToken: '',
                user: null
            };

        default:
            return state
    }
};
