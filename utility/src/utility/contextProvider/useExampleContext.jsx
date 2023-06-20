import React, { useContext, useMemo, useState } from "react";

const ExampleContext = React.createContext({});

export const BeautyProvider = ({ children }) => {
  //Provide your bisnes logic
  const [someLogic, setSomeLogic] = useState();

  const value = useMemo(() => {
    return { someLogic, setSomeLogic };
  }, [someLogic, setSomeLogic]);

  return (
    <ExampleContext.Provider value={value}>{children}</ExampleContext.Provider>
  );
};

export const useExampleContext = () => {
  const context = useContext(ExampleContext);

  if (!context) {
    throw new Error("You need to wrap JSX in BeautyProvider");
  }

  return context;
};
