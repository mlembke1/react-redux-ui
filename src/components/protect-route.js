import React from 'react'
import  { route } from 'react-router-dom'
import { connect  } from 'react-redux'
import { Route } from 'react-router-dom'
import LoginForm from './login/login-container.js'

const ProtectRoute = ({ component: Component, token }) => {
  if (token) {
    return  <Route render={(props) => <Component { ...props} /> } />
  } else {
    return <LoginForm />
  }
}

const mapStateToProps = state => state.auth

export default connect(mapStateToProps)(ProtectRoute)
