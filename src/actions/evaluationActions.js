import axios from 'axios'
import api_endpoints from '../utils/api_endpoints'

const evaluations = api_endpoints.evaluations

export const fetch_evaluations = () => {
    return {
        type: 'FETCH_EVALUATIONS',
        payload: axios.get(evaluations)
    }
}

export const add_evaluation = evaluation => ({
    type: 'ADD_EVALUATION',
    payload: axios.post(evaluations, evaluation)
})

export const init_edit_mode = id => ({
    type: 'INIT_EVALUATION_EDIT',
    payload: id
})

export const cancel_evaluation_edit = () => ({
    type: 'CANCEL_EVALUATION_EDIT'
})

export const update_evaluation = evaluation => ({
    type: 'UPDATE_EVALUATION',
    payload: axios.put(`${evaluations}/${evaluation.id}`, evaluation)
})

export const delete_evaluation = id => ({
    type: 'DELETE_EVALUATION',
    payload: axios.delete(`${evaluations}/${id}`)
})
