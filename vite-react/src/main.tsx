import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import fib from 'virtual:fib';
import env from 'virtual:env';

console.log((`结果: ${fib(10)}`))
console.log(env)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
