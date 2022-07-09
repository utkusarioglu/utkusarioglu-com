import { useMediaQuery } from "react-responsive";

export function useDeviceQuery() {
  const isSm = useMediaQuery({
    query: "(max-width: 800px)",
  });
  return { isSm };
}
