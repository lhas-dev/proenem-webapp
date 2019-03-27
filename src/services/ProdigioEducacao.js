import axios from 'axios';

const endpoint = 'https://dev-api.prodigioeducacao.com';
const version = 'v1';

const authentication = ({ email, password }) => axios.post(`${endpoint}/${version}/token`, { email, password });

export default {
    authentication,
};
