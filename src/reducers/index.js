import {combineReducers} from 'redux'
import petReducer from './pet'

const rootReducer = combineReducers({
  pets: petReducer,
})

export default rootReducer