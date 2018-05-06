const default_state = {
    items: [],
    schema: [],
    fetching: false,
    fetched: false,
    error: null,
    isFormVisible: false
} 

export default (state=default_state, action) => {
    switch(action.type) {
        case 'FETCH_PROJECTS_PENDING':
            return { 
                ...state, 
                fetching: true 
            }
        case 'FETCH_PROJECTS_FULFILLED':
           return { 
                ...state, 
                items: action.payload.data.splice(1),
               	schema: action.payload.data[0],
                fetched: true,
                fetching: false
            }
        case 'FETCH_PROJECTS_REJECTED':
            return {
                ...state,
                error: action.payload
            }
        case 'ADD_PROJECT_FULFILLED':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload.data
                ]
            }
        case 'DELETE_PROJECT_FULFILLED':
            const itemId = action.payload.request.responseURL.split('/').pop()
            return {
                ...state,
                items: [...state.items ].filter(item => item.id !== itemId)
            }
        default:
            return { ...state }
    }
}
