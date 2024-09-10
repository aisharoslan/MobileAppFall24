import React from 'react'
// use ReactNative for mobile
// ReactDOM - use JSX
// do npm install when downloading someone else's project
// package.json has all dependencies
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
