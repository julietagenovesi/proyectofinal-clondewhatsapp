import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"
import { ChatProvider } from "../context/ChatContext"
import { ThemeProvider } from "../context/ThemeContext.jsx"

const Messages = () => {
  return (
    <ThemeProvider>
      <ChatProvider>
        <div className="app">
          <Sidebar />
          <Chat />
        </div>
      </ChatProvider>
    </ThemeProvider>
  )
}

export { Messages }