import { createStore,applyMiddleware} from 'redux'
import {createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'


// last import
import Appreducer from './reducer'
// debug logger
const logger = createLogger({})


// define store
const store = createStore(
    Appreducer,
    applyMiddleware(
        logger,
        promiseMiddleware
    )
)
export default store