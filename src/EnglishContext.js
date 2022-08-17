import React, { useState } from "react";

export const EnglishContext = React.createContext();

export const EnglishArea = ({ children, initialLang }) => {
  const [english, setEnglish] = useState(initialLang);

  return (
    <EnglishContext.Provider value={{ english, setEnglish }}>
      {children}
    </EnglishContext.Provider>
  );
}