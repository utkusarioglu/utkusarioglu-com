import { createContext, useContext } from "react";

export const initialValues = {
  navigation: true,
};

export const AppContext = createContext(initialValues);

export const useAppContext = useContext(AppContext);
