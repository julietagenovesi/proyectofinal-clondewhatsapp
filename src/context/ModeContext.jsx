import { createContext, useContext, useState, useEffect, Children } from "react";

const ModeContext = createContext()

const ModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const contextValue = {
    isDarkMode,
    toggleDarkMode
  };

  return (
    <ModeContext.Provider value={contextValue}>
      {children}
    </ModeContext.Provider>
  );

}

export const useModeContext = () => useContext(ModeContext);
