import { createContext, useReducer } from "react";

export const CattleContext = createContext();

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
    case "DELETE_CATTLE":
      return {
        cattle: state.cattle.filter((c) => c._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export function CattleContextProvider({ children }) {
  const [state, dispatch] = useReducer(cattleReducer, {
    cattle: null,
  });

  // dispatch({ type: "SET_CATTLE", payload: [{}, {}] });

  return (
    <CattleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CattleContext.Provider>
  );
}
