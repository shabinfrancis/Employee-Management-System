import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { initializeLocalStorage } from './utils/localStorage.jsx'

initializeLocalStorage();

createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
      <App />
    </AuthProvider>
  
)
