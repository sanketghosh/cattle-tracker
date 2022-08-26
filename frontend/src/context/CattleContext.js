import { createContext, useReducer } from "react";

const CattleContext = createContext();

export const cattleReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATTLE":
      return {
        cattle: action.payload,
      };
    case "CREATE_CATTLE":
      return {
        cattle: [action.payload, ...state.cattle],
      };
  }
};

export function CattleContextProvider({ children }) {
  const [state, dispatch] = useReducer(cattleReducer, {
    cattle: null,
  });

  // dispatch({ type: "SET_CATTLE", payload: [{}, {}] });

  return <CattleContext.Provider>{children}</CattleContext.Provider>;
}
