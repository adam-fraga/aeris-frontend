import React, {
  createContext,
  useContext,
  PropsWithChildren,
  FC,
  useState,
} from "react";

const GeneralContext = createContext({});

//Personnal hook to consume context
export function useMyContext() {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
}

//Wrapp the application to access context
export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [aiService, setAiService] = useState("");
  const [settings, setSettings] = useState({});
  const [prompt, setPrompt] = useState({});

  return (
    <GeneralContext.Provider
      value={{
        settings,
        setSettings,
        aiService,
        setAiService,
        prompt,
        setPrompt,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
