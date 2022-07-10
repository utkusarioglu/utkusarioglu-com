import { type ReactNode } from "react";

export interface AppSlice {
  navigation: boolean;
}

export type IAppContext = AppSlice & {
  setNavigation: (isVisible: boolean) => void;
};

export interface AppContextProviderProps {
  children: ReactNode;
}
