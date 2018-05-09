import axios from 'axios'
import api_endpoints from '../utils/api_endpoints'

const projects = api_endpoints.projects

export const fetch_projects = () => ({
    type: 'FETCH_PROJECTS',
    payload: axios.get(projects)
})
   
export const add_project = project => ({
    type: 'ADD_PROJECT',
    payload: axios.post(projects, project)
})

export const init_edit_mode = id => ({
    type: 'INIT_EDIT',
    payload: id
})

export const cancel_project_edit = () => ({
    type: 'CANCEL_EDIT'
})

export const update_project = project => ({
    type: 'UPDATE_PROJECT',
    payload: axios.put(`${projects}/${project.id}`, project)
})

export const delete_project = id => ({
    type: 'DELETE_PROJECT',
    payload: axios.delete(`${projects}/${id}`)
})