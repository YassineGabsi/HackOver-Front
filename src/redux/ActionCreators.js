import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';
import axios from 'axios'


export const loginModalOpen = () => ({
    type: ActionTypes.OPEN_MODAL
});

export const loginModalClose = () => ({
    type: ActionTypes.CLOSE_MODAL
});

//---------------------- Feedback actions------------------------

//---------------------- Search actions------------------------

//---------------------- Hackathons actions------------------------
export const requestHackathons = () => {
    return {
        type: ActionTypes.HACKATHON_LOADING
    }
};

export const listHackathons = (hackathons) => {
    return {
        type: ActionTypes.LIST_HACKATHONS,
        hackathons
    }
};

export const hackathonsError = (message) => {
    return {
        type: ActionTypes.HACKATHON_FAILED,
        message
    }
};

export const getHackathons = () => (dispatch) => {
    console.log("hi");
    dispatch(requestHackathons());
    return axios.get(baseUrl + 'hackathon')
        .then(response => {
            console.log(response.status);
            if (response.status === 200 || 201) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            throw error;
        })
        .then(response => {
            dispatch(listHackathons(response));
        })
        .catch(error => dispatch(hackathonsError(error.message)))
};

export const addHackathon = (data) => (dispatch) => {
    dispatch(requestHackathons());
    console.log(data);
    return axios.post(baseUrl + 'hackathon', data)
        .then(response => {
                console.log(response.status);
                if (response.status === 200 || 201) {
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
        .then(response => {
            console.log(response);
            dispatch(listHackathons(response));
        })
        .catch(error => dispatch(hackathonsError(error.message)))
};


//---------------------- Registration actions------------------------
export const requestRegister = (user) => {
    return {
        type: ActionTypes.REGISTER_REQUEST,
        user
    }
};

export const receiveRegister = () => {
    return {
        type: ActionTypes.REGISTER_SUCCESS,
    }
};

export const registerError = (message) => {
    return {
        type: ActionTypes.REGISTER_FAILURE,
        message
    }
};

export const registerSendEmail = () => {
    return {
        type: ActionTypes.REGISTER_EMAIL
    }
};

export const registerUser = (creds) => (dispatch) => {
    dispatch(requestRegister(creds));
    console.log(creds);
    return axios.post(baseUrl + 'auth/register', creds)
        .then(response => {
                console.log(response.status);
                if (response.status === 200 || 201) {
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
        .then(response => {
            if (response.data.success) {
                // Dispatch the success action
                dispatch(receiveRegister(response));
            } else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(registerError(error.message)))
};

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
        accessToken: response.data.accessToken,
        user: response.data.user,
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
    return axios.post(baseUrl + 'auth/login', creds)
        .then(response => {
                console.log(response);
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
        .then(response => {
            console.log(response);
            if (response.data.success) {
                console.log(response.data.accessToken);
                // If login was successful, set the token in local storage
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('creds', JSON.stringify(response.data.user));
                // Dispatch the success action
                dispatch(receiveLogin(response));
            } else {

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
    return fetch(baseUrl + 'auth/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
};
