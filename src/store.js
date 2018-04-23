import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducers from './reducers'

<<<<<<< HEAD
const middleware = applyMiddleware(promise(), thunk, logger)

export default createStore(reducers, {}, middleware)
=======
const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(middleware, reducers)
>>>>>>> 138ece3d5b384a3431c5bd351f47bc64509b5f20
