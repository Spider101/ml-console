import axios from 'axios'
import api_endpoints from '../utils/api_endpoints'

const train_jobs = api_endpoints.train_jobs

export const fetch_train_jobs = () => {
    return {
        type: 'FETCH_TRAIN_JOBS',
        payload: axios.get(train_jobs)
    }
}

export const add_train_job = train_job => ({
    type: 'ADD_TRAIN_JOB',
    payload: axios.post(train_jobs, train_job)
})

export const init_edit_mode = id => ({
    type: 'INIT_EDIT',
    payload: id
})

export const cancel_job_edit = () => ({
    type: 'CANCEL_EDIT'
})

export const update_train_job = train_job => ({
    type: 'UPDATE_TRAIN_JOB',
    payload: axios.put(`${train_jobs}/${train_job.id}`)
})

export const delete_train_job = id => ({
    type: 'DELETE_TRAIN_JOB',
    payload: axios.delete(`${train_jobs}/${id}`)
})