import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>   {/* It allows us to use all the features from react router within the app component tree */}
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
