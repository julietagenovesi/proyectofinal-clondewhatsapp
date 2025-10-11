import { useState, useEffect } from "react"
import { useChat } from "../context/ChatContext"

export default function Sidebar() {
  const { users, setSelectedUser } = useChat()
  const [usersToRender, setUsersToRender] = useState(users)

  // 🔄 Cada vez que cambien los usuarios globales, actualizamos la lista a renderizar
  useEffect(() => {
    setUsersToRender(users)
  }, [users])

  // 🔍 Filtro por búsqueda
  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    )
    setUsersToRender(result)
  }

  return (
    <div className="sidebar">
      <div className="search-container">
        <i className='bx bx-search'></i>
        <input
          type="text"
          placeholder="Buscar un chat o iniciar uno nuevo..."
          className="search"
          onChange={handleChange}
        />
      </div>

      {usersToRender.length === 0 && (
        <p className="search-result">No search found...</p>
      )}

      <ul className="user-list">
        {usersToRender.map((user) => (
          <li
            key={user.id}
            onClick={() => setSelectedUser(user.id)}
            className="user"
          >
            <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt={user.name}
            />
            <div className="user-info">
              <strong>
                {user.name}
              </strong>
              <small>
                <span
                  style={{
                    color: user.status === "online" ? "green" : "red",
                    marginRight: "3px",
                  }}
                >
                  •
                </span>
                {user.status === "offline" ? user.lastSeen : "online"}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
