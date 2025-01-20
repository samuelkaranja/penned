import { createContext } from "react";
import { posts } from "../assets/Data";

console.log(posts);

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ posts }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
