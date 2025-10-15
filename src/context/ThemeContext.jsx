import { createContext, useContext, useState, useEffect } from "react"

export const ThemeContext = createContext()



export const ThemeContextProvider = ({ children }) => {
  const [contextTheme, setContextTheme] = useState(() => {
    return localStorage.getItem("appTheme") || "Light"
  })

  useEffect(() => {
    localStorage.setItem("appTheme", contextTheme)
  }, [contextTheme])

  const values = { contextTheme, setContextTheme }



  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  return context
}
