import axios from 'axios'

const server_uri = 'http://react-sandbox-banerjeeabhimanyu3120262.codeanyapp.com:3005'

const api_endpoints = {
    'get_projects': '/projects',
    'add_project': '/projects'
}

export const fetch_projects = () => ({
    type: 'FETCH_PROJECTS',
    payload: axios.get(server_uri + api_endpoints.get_projects)
})
   
export const add_project = project => ({
    type: 'ADD_PROJECT',
    payload: axios.post(server_uri + api_endpoints.add_project, project)
})