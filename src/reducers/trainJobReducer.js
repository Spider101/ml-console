const default_state = {
	items: [],
	schema: {}, 
    loading: false,
    error: null,
	itemInEdit: []
}

export default (state=default_state, action) => {
	switch(action.type) {
		case 'FETCH_TRAIN_JOBS_PENDING':
			return {
				...state,
				loading: true
			}
		case 'FETCH_TRAIN_JOBS_FULFILLED':
			return {
				...state,
				schema: action.payload.data[0],
                items: action.payload.data.slice(1),
				loading: false
			}
		case 'FETCH_TRAIN_JOBS_REJECTED':
			return {
				...state,
				loading: false,
				error: action.payload
			}
		case 'ADD_TRAIN_JOB_PENDING':
			return {
				...state,
				loading: true
			}
		case 'ADD_TRAIN_JOB_FULFILLED':
			return {
				...state,
				items: [
					...state.items,
					action.payload.data
				],
				loading: false
			}
		case 'INIT_TRAIN_JOB_EDIT':
			return {
				...state,
				itemInEdit: [ ...state.items ].filter(item => item.id === action.payload)
			}
		case 'CANCEL_TRAIN_JOB_EDIT':
            return {
                ...state,
                itemInEdit: []
            }
        case 'UPDATE_TRAIN_JOB_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_TRAIN_JOB_FULFILLED':
            const updatedItem = action.payload.data
            return {
            	...state,
                loading: false,
                items: [ ...state.items ].map(item => (
                	item.id === updatedItem.id ? updatedItem : item
                ))
            }
        case 'DELETE_TRAIN_JOB_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_TRAIN_JOB_FULFILLED':
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
