import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/root-reducer'
import { BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/header/header-container'
import ProtectRoute from './components/protect-route'
import TodoIndex from './components/todo/todo-index-container'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render((
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>
        <div>
          <Header />
          <ProtectRoute path='/' component={ TodoIndex }/>
        </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
