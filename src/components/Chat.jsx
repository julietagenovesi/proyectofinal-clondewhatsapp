import ReactSwitch from "react-switch"
import { useState } from "react"
import { useChat } from "../context/ChatContext"
import { useThemeContext } from "../context/ThemeContext"


export default function Chat() {
  const [msg, setMsg] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [checked, setChecked] = useState(false)
  const { users, selectedUser, setUsers } = useChat()
  const { contextTheme, setContextTheme } = useThemeContext()
  const [myName, setMyName] = useState('Julieta')
  const [myValue, setMyValue] = useState("myName")
  const [showInput, setShowInput] = useState(false)

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

  const handleshowPopUp = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === 'Light' ? 'Dark' : 'Light'))
    setChecked(nextChecked)
  }

  const handleName = (event) => {
    setMyValue(event.target.value)
  }

  const handleSaveName = () => {
    setMyName(myValue)
    setShowInput(false)
  }

  return (
    <>
      {
        showPopup === true && <section className="contenedor-popup">
          <div className="popup">
            <h1>Ajustes</h1>
            <p>Personalizá tus chats</p>
            <h3>Tema</h3>
            <div className="tema-switch">
              <ReactSwitch
                onChange={handleSwitch}
                checked={checked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch" />
              <p>Modo {contextTheme}</p>
            </div>

            <h3>Nombre de usuario</h3>
            <div className="nombre-usuario">
              {!showInput ? (
                <div>
                  <p>{myName}</p>
                  <button onClick={() => setShowInput(true)}>
                    <i className='bx bx-edit'></i>
                  </button>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    value={myValue}
                    onChange={handleName}
                    placeholder="Nuevo nombre"
                    autoFocus
                  />
                  <button onClick={handleSaveName}><i className='bx bx-check'></i></button>
                </>
              )}
            </div>

            <button className="btn-guardar" onClick={handleClosePopup}>Guardar cambios</button>
          </div>
        </section>
      }
      <div className="chat">
        <header className="chat-header">
          <div>
            <div className="chat-user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt={user.name}
                className="chat-avatar"
              />
              <div className="chat-info">
                <strong>{user.name}</strong>
                {user.lastSeen !== "" && <small className="last-seen"> {user.lastSeen}</small>}
              </div>
            </div>
          </div>

          <div className="chat-actions">
            <button title="Cámara"><i className='bx bx-camera'></i></button>
            <button title="Galería"><i className='bx bx-image'></i></button>
            <button title="Configuración" onClick={handleshowPopUp}><i className='bx bx-cog'></i></button>
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
              placeholder="Escribe un mensaje..."
              onChange={handleChange}
              value={msg}
            />
            <button><i className='bx bx-send'></i></button>
          </form>
        </footer>
      </div>
    </>
  )
}
