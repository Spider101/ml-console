const default_state = {
    items: [],
    schema: [],
    loading: false,
    error: null,
    itemInEdit: []
} 

export default (state=default_state, action) => {
    switch(action.type) {
        case 'FETCH_PROJECTS_PENDING':
            return { 
                ...state, 
                loading: true 
            }
        case 'FETCH_PROJECTS_FULFILLED':
           return { 
                ...state, 
                items: action.payload.data.splice(1),
               	schema: action.payload.data[0],
                loading: false
            }
        case 'FETCH_PROJECTS_REJECTED':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'ADD_PROJECT_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'ADD_PROJECT_FULFILLED':
            return {
                ...state,
                loading: false,
                items: [
                    ...state.items,
                    action.payload.data
                ]
            }
        case 'INIT_PROJECT_EDIT':
            return {
                ...state,
                itemInEdit: [ ...state.items ].filter(item => item.id === action.payload)
            }
        case 'CANCEL_PROJECT_EDIT':
            return {
                ...state,
                itemInEdit: []
            }
        case 'UPDATE_PROJECT_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_PROJECT_FULFILLED':
            const updatedItem = action.payload.data
            return {
            	...state,
                loading: false,
                items: [ ...state.items ].map(item => (
                	item.id === updatedItem.id ? updatedItem : item
                ))
            }
        case 'DELETE_PROJECT_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_PROJECT_FULFILLED':
            const itemId = action.payload.request.responseURL.split('/').pop()
            return {
                ...state,
                loading: false,
                items: [ ...state.items ].filter(item => item.id !== itemId)
            }
        default:
            return { ...state }
    }
}
