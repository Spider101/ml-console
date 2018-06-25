import { combineReducers } from 'redux'

import projects from './projectReducer'
import train_jobs from './trainJobReducer'
import evaluations from './evaluationReducer'

export default combineReducers({
    projects,
    train_jobs,
    evaluations
})
