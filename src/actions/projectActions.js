import axios from 'axios'

const server_uri = 'http://react-sandbox-banerjeeabhimanyu3120262.codeanyapp.com:3005'

const api_endpoint = `${server_uri}/projects`

export const fetch_projects = () => ({
    type: 'FETCH_PROJECTS',
    payload: axios.get(api_endpoint)
})
   
export const add_project = project => ({
    type: 'ADD_PROJECT',
    payload: axios.post(api_endpoint, project)
})

export const init_edit_mode = id => ({
    type: 'INIT_EDIT',
    payload: id
})

export const update_project = (project) => ({
    type: 'UPDATE_PROJECT',
    payload: axios.put(api_endpoint + `/${project.id}`, project)
})

export const delete_project = id => ({
    type: 'DELETE_PROJECT',
    payload: axios.delete(api_endpoint + `/${id}`)
})