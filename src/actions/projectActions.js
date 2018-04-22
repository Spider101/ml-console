import axios from 'axios'

const server_uri = 'http://react-sandbox-banerjeeabhimanyu3120262.codeanyapp.com:3005'

const api_endpoints = {
    'get_projects': '/projects'
}

export const fetch_projects = () => {
    return {
        type: 'FETCH_PROJECTS',
        payload: axios.get(server_uri + api_endpoints.get_projects)
    }
}