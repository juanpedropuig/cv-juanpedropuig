import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeArea = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}