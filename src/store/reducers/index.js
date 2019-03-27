import { combineReducers } from 'redux';
import auth from './auth';
import snackbar from './snackbar';

export default combineReducers({
    auth,
    snackbar,
});
