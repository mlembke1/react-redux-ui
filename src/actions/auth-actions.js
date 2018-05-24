const LOGIN_PASS = 'LOGIN_PASS'
const LOGOUT = 'LOGOUT'
const LOGIN_FAIL = 'LOGIN_FAIL'

const loginSubmit = ({ username, password }) => {
  const url = `${process.env.REACT_APP_API_URL}/login`

  const options = {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  return dispatch => {
    fetch(url, options)
    .then(result => result.json())
    .then(result => {
      const { token, error } = result
      if(error){
        dispatch({ type: LOGIN_FAIL, payload: { error } })
      } else {
        const payload = { username, token }
        dispatch({ type: LOGIN_PASS, payload })
      }
    })
  }
}

export { LOGIN_PASS, LOGIN_FAIL, loginSubmit }
