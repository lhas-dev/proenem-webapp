export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';

export const requestAuthentication = ({ email, password }) => dispatch => {
    dispatch({
        type: AUTHENTICATION_REQUEST,
    });
};
