import { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILURE, } from '../actions/auth';

const initialState = {
    id: '',
    email: '',
    imageProfile: '',
    name: '',
    token: '',
    error: false,
    loading: false,
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION_REQUEST:
            return {
                ...state,
                ...action.payload,
                error: false,
                loading: true,
            };
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                ...action.payload,
                error: false,
                loading: false,
            };
        case AUTHENTICATION_FAILURE:
            return {
                ...state,
                error: true,
                loading: false,
            };
        default:
            return state;
    }
};

export default auth;
