const default_state = {
	items: [],
	schema: {}, 
    loading: false,
    error: null,
	itemInEdit: [],
    itemLogs: {}
}

export default (state=default_state, action) => {
	switch(action.type) {
		case 'FETCH_EVALUATIONS_PENDING':
			return {
				...state,
				loading: true
			}
		case 'FETCH_EVALUATIONS_FULFILLED':
			return {
				...state,
				schema: action.payload.data[0],
                items: action.payload.data.slice(1),
				loading: false
			}
		case 'FETCH_EVALUATIONS_REJECTED':
			return {
				...state,
				loading: false,
				error: action.payload
			}
		case 'ADD_EVALUATION_PENDING':
			return {
				...state,
				loading: true
			}
		case 'ADD_EVALUATION_FULFILLED':
			return {
				...state,
				items: [
					...state.items,
					action.payload.data
				],
				loading: false
			}
		case 'INIT_EVALUATION_EDIT':
			return {
				...state,
				itemInEdit: [ ...state.items ].filter(item => item.id === action.payload)
			}
		case 'CANCEL_EVALUATION_EDIT':
            return {
                ...state,
                itemInEdit: []
            }
        case 'UPDATE_EVALUATION_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_EVALUATION_FULFILLED':
            const updatedItem = action.payload.data
            return {
            	...state,
                loading: false,
                items: [ ...state.items ].map(item => (
                	item.id === updatedItem.id ? updatedItem : item
                ))
            }
        case 'DELETE_EVALUATION_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_EVALUATION_FULFILLED':
            const itemId = action.payload.request.responseURL.split('/').pop()
            return {
                ...state,
                loading: false,
                items: [ ...state.items ].filter(item => item.id !== itemId)
			}          
        case 'FETCH_EVALUATION_PENDING':
			return {
				...state,
                loading: true,
			}
        case 'FETCH_EVALUATION_FULFILLED':
            return{
                ...state,
                loading: false,
                itemLogs: action.payload.data.logs
            }
		default:
			return { ...state }
	}
}
