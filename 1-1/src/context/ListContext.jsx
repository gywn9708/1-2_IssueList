/* eslint-disable no-undef */
import { createContext } from "react";

export const ListContext = createContext({ children });
export const ListContextProvider = () => {
  return <ListContextProvider value={value}>{children}</ListContextProvider>;
};
