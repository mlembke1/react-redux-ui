const TODOS_LISTED = 'TODOS_LISTED'

const listTodos = ({ token }) = {
  const url = `${process.env.PEACT_APP_APU_URL}/todo`

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  return dispatch => {
    fetch(url, options)
      .then(result => result.json())
      .then(result => {
        dipatch({ type: TODOS_LISTED, payload: result })
      })
  }
}

export { TODOS_LISTED, listTodos }
