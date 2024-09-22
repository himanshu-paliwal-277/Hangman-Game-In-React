import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Children Props */}
    {/* BrowserRouter is provided by a react-router-dom library */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
