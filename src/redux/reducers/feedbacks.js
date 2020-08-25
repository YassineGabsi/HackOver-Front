import * as ActionTypes from '../ActionTypes';
import { FEEDBACKS } from "../../shared/feedbacks";

export const Feedbacks = (state = {
    feedbacks: FEEDBACKS,
    errMess: null,
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return { ...state, feedbacks: state.feedbacks.concat(feedback)};

        case ActionTypes.FEEDBACK_FAILED:
            return {...state, errMess: action.payload};
        default:
            return state;
    }
};
