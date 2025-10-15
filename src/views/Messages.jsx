import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"
import { ChatProvider, useChat } from "../context/ChatContext"
import { ThemeContextProvider, useThemeContext } from "../context/ThemeContext.jsx"

const MessagesContent = () => {
  const { contextTheme } = useThemeContext()
  const { selectedUser } = useChat();

  return (
    <div className={`app ${selectedUser != null ? "has-selection" : ""} `} id={contextTheme}>
      <Sidebar className='sidebar' />
      <Chat user={selectedUser} className='chat' />
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