import { useState } from "react"
import { useChat } from "../context/ChatContext"

export default function Chat() {
  const [msg, setMsg] = useState("")

  // 1. Obtenemos del contexto todo lo necesario
  const { users, selectedUser, setUsers } = useChat()

  // 2. Buscamos el usuario activo
  const user = users.find(u => u.id === selectedUser)

  if (!user) {
    return (
      <div className="user-not-found">
        <p>No hay usuario seleccionado...</p>
      </div>
    )
  }

  // 3. Manejo del input
  const handleChange = (event) => {
    setMsg(event.target.value)
  }

  // 4. Cuando enviamos el formulario
  const handleSubmit = (event) => {
    event.preventDefault()

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    // ✅ Actualizamos el estado de manera INMUTABLE
    const updatedUsers = users.map(u =>
      u.id === user.id
        ? { ...u, messages: [...u.messages, newMessage] }
        : u
    )

    setUsers(updatedUsers)

    setMsg("")
  }

  return (
    <div className="chat">
      <header className="chat-header">
        <div>
          <div className="chat-user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt={user.name}
              className="chat-avatar"
            />
            <strong>{user.name}</strong>
            {user.lastSeen !== "" && <span className="last-seen">Last seen: {user.lastSeen}</span>}
          </div>
        </div>

        <div className="chat-actions">
          <button title="Camara"><i className='bx bx-camera'></i></button>
          <button title="Galeria"><i className='bx bx-image'></i></button>
          <button title="Configuración"><i className='bx bx-cog'></i></button>
          <button title="Ayuda"><i className='bx bx-help-circle'></i></button>
        </div>
      </header>

      <section className="chat-messages">
        {user.messages.map((message) => (
          <div className="message" key={message.id}>
            <p>{message.text}</p>
            <span className="time">{message.time}</span>
          </div>
        ))}
      </section>

      <footer className="chat-footer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter text here..."
            onChange={handleChange}
            value={msg}
          />
          <button>➤</button>
        </form>
      </footer>
    </div>
  )
}
