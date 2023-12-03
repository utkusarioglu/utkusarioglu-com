import {
  Context,
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
} from "react";
import { produceLayout } from "_contexts/layout/layout.context.logic";
import type {
  ILayoutContext,
  LayoutContextProviderProps,
  SetLayout,
} from "./Layout.context.types";

let LayoutContext: Context<ILayoutContext>;

const LayoutContextProvider: FC<LayoutContextProviderProps> = ({
  route,
  children,
}) => {
  const layout = produceLayout(route);
  if (!LayoutContext) {
    LayoutContext = createContext(layout as ILayoutContext);
  }
  const [slice, setSlice] = useState(layout);

  useEffect(
    () => {
      setSlice((slice) => ({ ...slice, ...layout }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [route]
  );

  const setLayout: SetLayout = (layoutSpecs) => {
    setSlice((slice) => ({ ...slice, ...layoutSpecs }));
  };

  return (
    <LayoutContext.Provider
      value={{
        ...slice,
        setLayout,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};

export default LayoutContextProvider;
