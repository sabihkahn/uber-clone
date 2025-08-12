import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import CaptionContext from './context/CaptionContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptionContext>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </CaptionContext>
  </StrictMode>,
)
