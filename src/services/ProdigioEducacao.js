import axios from 'axios';

const endpoint = 'https://dev-api.prodigioeducacao.com';
const version = 'v1';

const authentication = ({ email, password }) => axios.post(`${endpoint}/${version}/token`, { email, password });

const fetchPerson = ({ token }) => axios.get(`${endpoint}/${version}/person/me`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export default {
    authentication,
    fetchPerson,
};

