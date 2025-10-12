import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/images/logo.png"

const Login = () => {
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()
  const [error, setError] = useState()
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const PASS = "pepe123"

  /* Protegiendo la ruta del login */
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser === "true") {
      navigate("/chat")
    }
  }, [navigate])

  const validatePassword = () => {
    setMessage(null)
    setError(null)

    if (password === PASS) {
      localStorage.setItem("loggedInUser", "true")
      setMessage("Contraseña valida, serás redirigido.")
      setTimeout(() => {
        navigate("/chat")
      }, 3000)
    } else {
      setError("Contraseña invalida, intentelo nuevamente")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validatePassword()
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <main className="login-main">
      <img width={100} src={logo} alt="logo de whatsapp" />
      <h1>Clon de Whatsapp</h1>
      <form onSubmit={handleSubmit}>
        <label>Clave de acceso</label>
        <div className="input-contraseña">
          <input
            placeholder="Ingrese la contraseña"
            type={showPassword ? "text" : "password"}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="btn-ver"
            onClick={handleShowPassword}
            type="button"><i className="fa fa-eye" aria-hidden="true"></i></button>
        </div>
        {message && <p style={{ color: "green" }}>{message}</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="btn-acceder">Acceder</button>
      </form>
      <p className="text-info">Acceso restringido • Contenido privado</p>
    </main>
  )
}

export { Login }