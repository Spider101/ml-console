import { combineReducers } from 'redux'

import projects from './projectReducer'
import train_jobs from './trainJobReducer'

export default combineReducers({
    projects,
    train_jobs
})
