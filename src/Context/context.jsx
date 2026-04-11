import React from "react";
import { createContext } from "react";

export const bookContext = createContext();

const data = {
  name: "fahim",
};
const ContextProvider = ({ children }) => {
  return <bookContext.Provider value={data}>{children}</bookContext.Provider>;
};

export default ContextProvider;
