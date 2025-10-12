import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    /*Guarda el tema en localStorage*/
    return localStorage.getItem("theme") || "light"
  })

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  /*Guarda el valor en localStorage cada vez que cambia*/
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)