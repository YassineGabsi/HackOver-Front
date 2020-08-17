import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const loginModalOpen = () => ({
    type: ActionTypes.OPEN_MODAL
});

export const loginModalClose = () => ({
    type: ActionTypes.CLOSE_MODAL
});
