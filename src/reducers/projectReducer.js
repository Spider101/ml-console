const default_state = {
    projects: [],
    fetching: false,
    fetched: false,
    error: null
} 

export default (state=default_state, action) => {
    switch(action.type) {
        case 'FETCH_PROJECTS_PENDING':{
            return { ...state, fetching: true }
        }
        case 'FETCH_PROJECTS_FULFILLED':{
            return { 
                ...state, 
                projects: action.payload, 
                fetched: true,
                fetching: false
            }
        }
        case 'FETCH_PROJECTS_REJECTED':{
            return {
                ...state,
                error: action.payload
            }
        }
        default: { 
            return { ...state }
        }
    }
}
