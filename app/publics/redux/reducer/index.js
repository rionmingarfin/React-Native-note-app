import { combineReducers } from 'redux'

import notes from './notes'
import Category from './category'

const Appreducer = combineReducers({
    notes,
    Category,
})

export default Appreducer