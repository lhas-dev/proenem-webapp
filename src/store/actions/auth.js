import { ProdigioEducacao } from '../../services';
export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';

export const requestAuthentication = ({ email, password }) => async dispatch => {
    dispatch({
        type: AUTHENTICATION_REQUEST,
    });
    try {
        const { data } = await ProdigioEducacao.authentication({ email, password});

        dispatch({
            type: AUTHENTICATION_SUCCESS,
            payload: {
                email,
                token: data.token,
                id: data.credentials.id,
                imageProfile: data.credentials.imageProfile,
                name: data.credentials.name,
            }
        });
    } catch (e) {
        dispatch({
            type: AUTHENTICATION_FAILURE,
        });
    }
};
