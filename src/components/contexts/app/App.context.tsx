import { createContext, useContext, useState, type FC } from "react";
import type {
  AppSlice,
  IAppContext,
  AppContextProviderProps,
} from "./App.context.types";

export const sliceInitialValues: AppSlice = {
  navigation: true,
};

export const AppContext = createContext(sliceInitialValues as IAppContext);

const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [slice, setSlice] = useState(sliceInitialValues);

  const setNavigation = (isVisible: boolean) =>
    setSlice((slice) => ({ ...slice, navigation: isVisible }));

  return (
    <AppContext.Provider value={{ ...slice, setNavigation }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
