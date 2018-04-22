import axios from 'axios'

const api_endpoints = {
    'get_projects': ''
}

const fetch_projects = () => {
    return {
        type: 'FETCH_PROJECTS',
        payload: axios.get(api_endpoints.get_projects)
    }
}

export fetch_projects
