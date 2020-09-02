import * as ActionTypes from '../ActionTypes';
import { HACKATHONS } from "../../shared/hackathons";

export const Hackathons = (state = {
    hackathons: HACKATHONS,
    isLoading: true
}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
