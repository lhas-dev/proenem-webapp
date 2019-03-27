import { SHOW_SNACKBAR, HIDE_SNACKBAR, } from '../actions/snackbar';

const initialState = {
    visible: false,
    message: '',
};

const snackbar = (state = initialState, { type, message, }) => {
    switch (type) {
        case SHOW_SNACKBAR:
            return {
                ...state,
                visible: true,
                message,
            };
        case HIDE_SNACKBAR:
            return {
                ...state,
                visible: false,
            };
        default:
            return state;
    }
};

export default snackbar;
