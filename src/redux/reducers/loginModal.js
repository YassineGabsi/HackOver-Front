import * as ActionTypes from '../ActionTypes'

export const LoginModal = (state = {
   isModalOpen : false
}, action) => {
    switch (action.type) {
        case ActionTypes.OPEN_MODAL:
            return {...state, isModalOpen: true};

        case ActionTypes.CLOSE_MODAL:
            return {...state, isModalOpen: false};

        default:
            return state;
    }
};
