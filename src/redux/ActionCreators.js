import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const loginModalOpen = () => ({
    type: ActionTypes.OPEN_MODAL
});

export const loginModalClose = () => ({
    type: ActionTypes.CLOSE_MODAL
});

//---------------------- Feedback actions------------------------

//---------------------- Search actions------------------------


//---------------------- Authentification actions------------------------

export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
};

export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
};

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
};

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));
    console.log(creds);

    return fetch(baseUrl + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(creds)
    })
        .then(response => {
            console.log(response.status);
                if (response.status === 200) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                // If login was successful, set the token in local storage
                localStorage.setItem('accessToken', response.accessToken);
                localStorage.setItem('creds', JSON.stringify(creds));
                // Dispatch the success action
                dispatch(receiveLogin(response));
            }
            else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    }
};

export const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
};

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('accessToken');
    localStorage.removeItem('creds');
    dispatch(receiveLogout());

};
