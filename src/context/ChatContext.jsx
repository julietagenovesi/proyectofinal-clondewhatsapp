import { createContext, useContext, useState, useEffect } from "react"

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  // 1. Estado de usuarios
  const [users, setUsers] = useState([])

  // 2. Estado del usuario seleccionado
  const [selectedUser, setSelectedUser] = useState(null)

  // 3. Al montar el Provider, revisamos si hay usuarios guardados en localStorage
  //    - Si existen, los usamos
  //    - Si no existen, cargamos los mock iniciales
  useEffect(() => {
    const storedUsers = localStorage.getItem("users")

    if (storedUsers !== null) {
      setUsers(JSON.parse(storedUsers))
    } else {
      const initialUsers = [
        {
          id: 1,
          name: "Sofía Álvarez",
          status: "online",
          lastSeen: "En línea",
          messages: [
            { id: 1, text: "Hola Sofi, como estas?", time: "10:30" }
          ]
        },
        {
          id: 2,
          name: "Camila Duarte",
          status: "offline",
          lastSeen: "hace 3 horas",
          messages: [
            { id: 1, text: "RESPONDEEEE QUE TENGO HAMBREE!", time: "15:00" },
            { id: 2, text: "estoy desde las 12 en el banco!!", time: "15:10" },
            { id: 3, text: "ahora voy a casa, llevo empanadas :)", time: "20:00" }
          ]
        },
        {
          id: 3,
          name: "Tomás Herrera",
          status: "online",
          lastSeen: "En línea",
          messages: [
            { id: 1, text: "Me encanta programación!!", time: "19:00" },
            { id: 2, text: "El profe es un capo!!!!!", time: "19:01" }
          ]
        },
        {
          id: 4,
          name: "Lucía Fernández",
          status: "offline",
          lastSeen: "hace 1 minuto",
          messages: [
            { id: 1, text: "Estoy en programación, después te mando...", time: "18:59" }
          ]
        },
        {
          id: 5,
          name: "Santiago Gómez",
          status: "online",
          lastSeen: "En línea",
          messages: [
            { id: 1, text: "Estoy en programación, después te mando...", time: "18:59" }
          ]
        },
        {
          id: 6,
          name: "Martina Ríos",
          status: "online",
          lastSeen: "En línea",
          messages: [
            { id: 1, text: "Estoy en programación, después te mando...", time: "18:59" }
          ]
        }
      ]
      setUsers(initialUsers)
      // Actualizamos la lista de usuarios en el localstorage
      localStorage.setItem("users", JSON.stringify(initialUsers))
    }
  }, [])

  // 4. Cada vez que `users` cambie, sincronizamos con localStorage
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users))
    }
  }, [users])

  return (
    <ChatContext.Provider value={{ users, setUsers, selectedUser, setSelectedUser }}>
      {children}
    </ChatContext.Provider>
  )
}

const useChat = () => useContext(ChatContext)

export { useChat, ChatProvider }
