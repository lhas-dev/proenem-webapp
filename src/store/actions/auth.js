import { ProdigioEducacao } from '../../services';
import { showSnackbar } from './snackbar';
export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
export const FETCH_PERSON = 'FETCH_PERSON';
export const LOGOUT = 'LOGOUT';

export const requestAuthentication = ({ email, password }) => async dispatch => {
    dispatch({
        type: AUTHENTICATION_REQUEST,
    });
    try {
        const { data } = await ProdigioEducacao.authentication({ email, password});

        dispatch(showSnackbar({ message: 'Seja bem-vindo(a) ao Pro Enem!'}));
        dispatch({
            type: AUTHENTICATION_SUCCESS,
            payload: {
                email,
                token: data.token,
                id: data.credentials.id,
                imageProfile: data.credentials.imageProfile,
                name: data.credentials.name,
                lessonPlans: data.lessonPlans,
            }
        });
        const personResponse = await ProdigioEducacao.fetchPerson({ token: data.token });
        dispatch({
            type: FETCH_PERSON,
            payload: personResponse.data,
        });
    } catch (e) {
        dispatch(showSnackbar({ message: 'Confira se os dados estão corretos e tente novamente.'}));
        dispatch({
            type: AUTHENTICATION_FAILURE,
        });
    }
};


export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT,
    });
    dispatch(showSnackbar({ message: 'Você foi deslogado(a) com sucesso!'}));
};
