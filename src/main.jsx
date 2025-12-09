import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextShare from './context/ContextShare.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextShare>
        <GoogleOAuthProvider clientId="787825395712-73ako13h67rtvrm6v55hk0qdkp381nfk.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </ContextShare>
    </BrowserRouter>
  </StrictMode>,
)
