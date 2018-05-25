import { LOGIN_FAIL, LOGIN_PASS, LOGOUT } from '../actions/auth-actions'

const AuthReducer = (state = null, action) => {
  const initialState = {
    username: null,
    token: null,
    error: null
  }
  if(state) {
    switch(action.type) {
      case LOGIN_PASS:
        return {
          ...state,
          username: action.payload.username,
          token: action.payload.token,
          error: null
        }
      case LOGIN_FAIL:
          return {
            ...state,
            username: null,
            token: null,
            error: action.payload.error
          }
      case LOGOUT:
        return {
          ...state,
          username: null,
          token: null,
          error: null
        }
      default:
        return state
    }
  } else {
    return {...initialState}
  }
}

export default AuthReducer
