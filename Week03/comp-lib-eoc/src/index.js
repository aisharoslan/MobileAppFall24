import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// this is where we listen to our routes
root.render(
    // so now app will listen to routes from BrowserRouter
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
