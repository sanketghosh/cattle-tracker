import { createContext, useReducer } from "react";

const CattleContext = createContext();

export function CattleContextProvider({ children }) {
  const [state, dispatch] = useReducer;

  return <CattleContext.Provider>{children}</CattleContext.Provider>;
}
