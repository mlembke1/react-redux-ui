import React from 'react'
import './header-container.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'react-redux'

class Header extends React.Component {

  onLogoutClick = event => {
    event.preventDefault()
    this.props.logout()
  }
    render(){
      return(
        <div className="header-conatiner">
          <a className='title' href="#title">Stupid Todos</a>
        { this.props.username !== null && <a href='#logout' onClick={ this.onLogoutClick }>{ `Logout ${ this.props.username }` }</a>}
        </div>
      )
    }
}

const mapStateToProps = state => state.auth

// const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)

export default connect(mapStateToProps)(Header)
