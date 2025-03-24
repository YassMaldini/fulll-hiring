import { createContext } from "react";
import { MainScreenContextProps } from "./MainScreen.types";

export const MainScreenContext = createContext<MainScreenContextProps>(
  {} as MainScreenContextProps
);