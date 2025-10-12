import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"
import { ChatProvider } from "../context/ChatContext"
import { ModeProvider } from "../context/ModeContext"

const Messages = () => {
  return (
    <ChatProvider>
      <ModeProvider>
        <div className="app">
          <Sidebar />
          <Chat />
        </div>
      </ModeProvider>
    </ChatProvider>
  )
}

export { Messages }