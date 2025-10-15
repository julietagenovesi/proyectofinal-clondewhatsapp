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
            { id: 1, text: "Hola Sofi, como estas?", time: "10:30" },
            { id: 2, text: "este finde podríamos hacer algo tranqui, ¿merienda o peli?", time: "10:31" }

          ]
        },
        {
          id: 2,
          name: "Camila Duarte",
          status: "offline",
          lastSeen: "hace 3 horas",
          messages: [
            { id: 1, text: "Cami, fijate si podés hacer pull del repo, que subí los últimos cambios.", time: "15:00" },
            { id: 2, text: "Creo que toqué algo del login, si te da error avisame.", time: "15:10" },
            { id: 3, text: "Cami, pudiste verlo?", time: "20:00" }
          ]
        },
        {
          id: 3,
          name: "Tomás Herrera",
          status: "online",
          lastSeen: "En línea",
          messages: [
            { id: 1, text: "Tomii, no sé si voy al cumple hoy, tengo que terminar un diseño", time: "19:00" },
            { id: 2, text: "Vos como venis con la entrega?", time: "19:01" }
          ]
        },
        {
          id: 4,
          name: "Lucía Fernández",
          status: "offline",
          lastSeen: "hace 1 minuto",
          messages: [
            { id: 1, text: "Viste el mail del cliente? quiere cambiar toda la paleta otra vez", time: "18:59" },
            { id: 2, text: "Igual el diseño final me encanta, lo voy a subir al portfolio.", time: "19:00" }
          ]
        },
        {
          id: 5,
          name: "Santiago Gómez",
          status: "online",
          lastSeen: "En línea",
          messages: [
            { id: 1, text: "Estoy en programación, después te mando...", time: "18:59" },
            { id: 2, text: "Estamos viendo CSS", time: "18:59" }
          ]
        },
        {
          id: 6,
          name: "Martina Ríos",
          status: "online",
          lastSeen: "En línea",
          messages: [
            { id: 1, text: "Martu cuando tengas el branding completo lo subimos al Behance", time: "18:59" }
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
