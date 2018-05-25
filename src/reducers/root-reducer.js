import { combineReducers } from 'redux'
import AuthReducer from './auth-reducer'
import TodoReducer from './todo-reducer'

const rootReducer = combineReducers({
  auth: AuthReducer,
  todo: TodoReducer
})

export default rootReducer
