import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import App from './containers/app'
import {counter} from './redux/reducers'

// 根据counter函数创建store对象
const store = createStore(
  counter,
  composeWithDevTools(applyMiddleware(thunk)) // 应用上异步中间件
)

// 定义渲染根组件标签的函数
ReactDOM.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById('root')
)


