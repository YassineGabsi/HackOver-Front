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
export const requestFeedbacks = () => {
    return {
        type: ActionTypes.REQUEST_FEEDBACKS
    }
};

export const feedbackDeleted = () => {
    return {
        type: ActionTypes.DELETE_FEEDBACK
    }
};


export const feedbackAdded = () => {
    return {
        type: ActionTypes.FEEDBACKS_SUCCESS
    }
};

export const listFeedbacks = (feedbacks) => {
    return {
        type: ActionTypes.LIST_FEEDBACKS,
        feedbacks
    }
};

export const feedbackError = (message) => {
    return {
        type: ActionTypes.FEEDBACK_FAILED,
        message
    }
};


export const getFeedbacks = (id) => (dispatch) => {
    dispatch(requestFeedbacks());
    return axios.get(baseUrl + `hackathon/feedback/${id}`, {headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }})
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
            dispatch(listFeedbacks(response.data));
            dispatch(feedbackAdded());
        })

        .catch(error => dispatch(feedbackError(error.message)))
};


export const deleteFeedback = (hackId, id) => (dispatch) => {
    dispatch(requestFeedbacks());
    return axios.delete(baseUrl + `hackathon/feedback/${hackId}/${id}`, {headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }})
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
            dispatch(feedbackDeleted());
            dispatch(getFeedbacks(hackId));
        })

        .catch(error => dispatch(feedbackError(error.message)))
};

export const addFeedback = (data, id) => (dispatch) => {
    dispatch(requestFeedbacks());
    var comment = {
        comment: data
    };
    return axios.post(baseUrl + `hackathon/feedback/${id}`, comment, {headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }})
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
            dispatch(feedbackAdded());
            dispatch(getFeedbacks(id));

        })

        .catch(error => dispatch(feedbackError(error.message)))
};
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

export const hackathonAdded = () => {
    return {
        type: ActionTypes.HACKATHON_ADDED,

    }
};

export const hackathonUpdated = () => {
    return {
        type: ActionTypes.HACKATHON_UPDATED,

    }
};

export const hackathonsLoaded = () => {
    return {
        type: ActionTypes.HACKATHONS_LOADED,

    }
};


export const hackathonsError = (message) => {
    return {
        type: ActionTypes.HACKATHON_FAILED,
        message
    }
};

export const hackathonsRemoved = () => {
    return {
        type: ActionTypes.HACKATHON_REMOVED
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
        .then(response => {
            dispatch(hackathonsLoaded());
        })
        .catch(error => dispatch(hackathonsError(error.message)))
};

export const removeHackathon = (data, id) => (dispatch) => {
    dispatch(requestHackathons());
    console.log(data);
    return axios.delete(baseUrl + `hackathon/${id}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('accessToken')}`}})
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
            dispatch(getHackathons());
            dispatch(hackathonsRemoved());
        })
        .catch(error => dispatch(hackathonsError(error.message)))
};

export const updateHackathon = (data, id) => (dispatch) => {
    dispatch(requestHackathons());
    console.log(data);
    return axios.put(baseUrl + `hackathon/${id}`, data, {headers: {'Authorization': `Bearer ${localStorage.getItem('accessToken')}`}})
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
            dispatch(getHackathons());
            dispatch(hackathonsLoaded());
            dispatch(hackathonUpdated());
        })

        .catch(error => dispatch(hackathonsError(error.message)))
};

export const addHackathon = (data) => (dispatch) => {
    dispatch(requestHackathons());
    console.log(data);
    console.log(localStorage.getItem('accessToken'));
    return axios.post(baseUrl + 'hackathon', data, {headers: {'Authorization': `Bearer ${localStorage.getItem('accessToken')}`}})
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
            dispatch(getHackathons());
        })
        .then(response => {
            dispatch(hackathonsLoaded());
            dispatch(hackathonAdded());
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

export const userRequest = () => {
    return {
        type: ActionTypes.GET_USER,
    }
};

export const userSuccess = () => {
    return {
        type: ActionTypes.USER_SUCCESS,
    }
};

export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        accessToken: response.data.accessToken,
        user: response.data.user,
    }
};

export const receiveUpdate = (response) => {
    return {
        type: ActionTypes.UPDATE_PROFILE,
        user: response.data.data
    }
};

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
};

// export const getUser = (email) => (dispatch) => {
//     dispatch(userRequest());
//     var data = {
//         email : email
//     };
//     console.log(email);
//     return axios.get(baseUrl + 'user/getUser', {headers: {'Authorization': `Bearer ${localStorage.getItem('accessToken')}`}} )
//         .then(response => {
//                 console.log(response);
//                 if (response.status === 200) {
//                     return response;
//                 } else {
//                     var error = new Error('Error ' + response.status + ': ' + response.statusText);
//                     error.response = response;
//                     throw error;
//                 }
//             },
//             error => {
//                 throw error;
//             })
//         .then(response => {
//             console.log(response);
//             if (response.data.success) {
//                 console.log(response.data.accessToken);
//                 // If login was successful, set the token in local storage
//                 localStorage.setItem('accessToken', response.data.accessToken);
//                 localStorage.setItem('creds', JSON.stringify(response.data.user));
//                 // Dispatch the success action
//                 dispatch(userSuccess());
//             } else {
//
//                 var error = new Error('Error ' + response.status);
//                 error.response = response;
//                 throw error;
//             }
//         })
//         .catch(error => dispatch(loginError(error.message)))
// };


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

//---------------------- change Email actions------------------------


export const receiveEmailUpdate = (response) => {
    return {
        type: ActionTypes.UPDATE_PROFILE,
        user: response.data.user
    }
};

export const requestChangeEmail = () => {
    return {
        type: ActionTypes.REQUEST_CHANGE_EMAIL
    }
};

export const changeEmailError = (message) => {
    return {
        type: ActionTypes.MAIL_FAILURE,
        message
    }
};

export const oldEmailSuccess = () => {
    return {
        type: ActionTypes.OLD_EMAIL_SUCCESS,
    }
};


export const changeEmailSuccess = () => {
    return {
        type: ActionTypes.CHANGE_EMAIL_SUCCESS,
    }
};


export const verifOldEmail = (email) => (dispatch) => {
    dispatch(requestChangeEmail());
    console.log(email);
    var data = {
        email: email
    };
    return axios.post(baseUrl + 'auth/recoverEmail', data)
        .then(response => {
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
            if (response.status === 200) {
                dispatch(oldEmailSuccess())
            } else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(changeEmailError(error.message)))
};


export const changeNewEmail = (creds, token) => (dispatch) => {
    dispatch(requestChangeEmail());
    console.log(creds);
    return axios.put(baseUrl + `auth/changeEmail/${token}`, creds,)
        .then(response => {
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
            if (response.status === 200) {
                dispatch(changeEmailSuccess());
                localStorage.setItem('creds', JSON.stringify(response.data.user));
                dispatch(receiveEmailUpdate(response));
            } else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(changeEmailError(error.message)))
};



//---------------------- Reset Password actions------------------------

export const requestEmail = () => {
    return {
        type: ActionTypes.REQUEST_EMAIL
    }
};

export const emailError = (message) => {
    return {
        type: ActionTypes.EMAIL_FAILURE,
        message
    }
};

export const emailSuccess = () => {
    return {
        type: ActionTypes.EMAIL_SUCCESS,
    }
};


export const resetSuccess = () => {
    return {
        type: ActionTypes.RESET_SUCCESS,
    }
};


export const resetPassword = (creds, token) => (dispatch) => {
    dispatch(requestEmail());
    console.log(creds);

    return axios.put(baseUrl + `auth/resetPassword/${token}`, creds,)
        .then(response => {
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
            if (response.data.message) {
                dispatch(resetSuccess())
            } else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(emailError(error.message)))
};

export const verifEmail = (email) => (dispatch) => {
    dispatch(requestEmail());
    console.log(email);
    var data = {
        email: email
    };
    return axios.post(baseUrl + 'auth/recover', data)
        .then(response => {
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
            if (response.data.message) {
                dispatch(emailSuccess())
            } else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(emailError(error.message)))
};


//---------------------- Update Profile actions------------------------

export const updateError = (message) => {
    return {
        type: ActionTypes.UPDATE_FAILURE,
        message
    }
};

export const updateSuccess = () => {
    return {
        type: ActionTypes.UPDATE_SUCCESS,
    }
};

export const updateRequest = () => {
    return {
        type: ActionTypes.UPDATE_REQUEST,
    }
};

export const updateProfile = (data, id) => (dispatch) => {
    dispatch(updateRequest());
    return axios.put(baseUrl + `user/updateProfile/${id}`, data, {headers: {'Authorization': `Bearer ${localStorage.getItem('accessToken')}`}})
        .then(response => {
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
            if (response.status === 200) {
                localStorage.setItem('creds', JSON.stringify(response.data.data));
                dispatch(updateSuccess());
                dispatch(receiveUpdate(response))
            } else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(updateError(error.message)))
};


//---------------------- Update Profile Pict------------------------



export const updatePictError = (message) => {
    return {
        type: ActionTypes.UPDATE_PICT_FAILURE,
        message
    }
};

export const updatePictSuccess = () => {
    return {
        type: ActionTypes.UPDATE_PICT_SUCCESS,
    }
};

export const updatePictRequest = () => {
    return {
        type: ActionTypes.UPDATE_REQUEST,
    }
}; 

export const updatePicture = (data, id) => (dispatch) => {
    dispatch(updatePictRequest());
    console.log(data);
    return axios.post(baseUrl + `user/updatePict/${id}`, data, {headers: {'Authorization': `Bearer ${localStorage.getItem('accessToken')}`}})
        .then(response => {
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
            if (response.data.message) {
                dispatch(updatePictSuccess());
                dispatch(receiveUpdate(response));
            } else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(updatePictError(error.message)))
};
//---------------------- Participate in hackathons actions------------------------

export const participateError = (message) => {
    return {
        type: ActionTypes.PARTICIPATION_FAILURE,
        message
    }
};

export const participateSuccess = () => {
    return {
        type: ActionTypes.PARTICIPATION_SUCCESS,
    }
};


export const disparticipateSuccess = () => {
    return {
        type: ActionTypes.DISPARTICIPATION_SUCCESS,
    }
};

export const participateRequest = () => {
    return {
        type: ActionTypes.REQUEST_PARTICIPATION,
    }
};

export const listParticipations = (data) => {
    return {
        type: ActionTypes.LIST_PARTICIPATIONS,
        data
    }
};

export const getParticipations = () => (dispatch) => {
    dispatch(participateRequest());
    return axios.get(baseUrl + `user/MyParticipations`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    )
        .then(response => {
                if (response.status === 200) {
                    console.log(response.data);
                    dispatch(listParticipations(response.data));
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
        .catch(error => dispatch(participateError(error.message)))
};


export const participateHackathon = (id) => (dispatch) => {
    dispatch(participateRequest());
    return axios.put(baseUrl + `hackathon/participation/${id}`, '', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    )
        .then(response => {
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
            dispatch(participateSuccess());
            dispatch(getParticipations());
        })
        .catch(error => dispatch(participateError(error.message)))

};


export const disparticipateHackathon = (id) => (dispatch) => {
    dispatch(participateRequest());
    return axios.put(baseUrl + `hackathon/disParticipate/${id}`, '', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    )
        .then(response => {
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
            dispatch(disparticipateSuccess());
            dispatch(getParticipations());
        })
        .catch(error => dispatch(participateError(error.message)))

};
