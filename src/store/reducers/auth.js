import { AUTHENTICATION_SUCCESS } from '../actions/auth';

const initialState = {
    email: '',
    token: '',
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default auth;
