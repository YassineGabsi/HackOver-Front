import * as ActionTypes from '../ActionTypes';
import { HACKATHONS } from "../../shared/hackathons";

export const Hackathons = (state = {
    hackathons: HACKATHONS
}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
