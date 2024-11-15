import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/globals/index.css'
import App from '../src/home/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <App />
  </StrictMode>,
)
