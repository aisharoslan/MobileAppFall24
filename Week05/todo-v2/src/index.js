import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoContext from './context/Todos'
import App from './App'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
//     <TodoContext.Provider value={'To-Do App'}>
//         <App />
//     </TodoContext.Provider>
// )
