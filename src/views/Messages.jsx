import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"
import { ChatProvider } from "../context/ChatContext"
import { ThemeContextProvider, useThemeContext } from "../context/ThemeContext.jsx"

const MessagesContent = () => {
  const { contextTheme } = useThemeContext() // obtenemos el tema actual

  return (
    <div className="app" id={contextTheme}>
      <Sidebar className='sidebar' />
      <Chat className='chat' />
    </div>
  )
}

const Messages = () => {
  return (
    <ChatProvider>
      <ThemeContextProvider >
        <MessagesContent />
      </ThemeContextProvider>
    </ChatProvider>
  )
}

export { Messages }