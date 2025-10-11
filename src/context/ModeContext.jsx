import { createContext, useContext, useState, useEffect, Children } from "react";

const ModeContext = createContext()

export const ModeComponent = ([children]) => {
  const [isDark, setisDark] = useState(false);

  return (
    <ModeContext.Provider value={{ isDark, setisDark }}>
      {children}
    </ModeContext.Provider>
  )
}

export const useModeContext = () => useContext(ModeContext)