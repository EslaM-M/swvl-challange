import React from "react";
import { initialState, reducer } from "./reducer";
export const Store = React.createContext();

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
