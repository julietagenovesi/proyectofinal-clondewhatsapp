import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp.jsx'
import './index.css'
import { ChatProvider } from './context/ChatContext.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <ThemeContextProvider>
        <RouterApp />
      </ThemeContextProvider>
    </ChatProvider>
  </StrictMode>,
)
