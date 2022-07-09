import { useState } from "react";
import { useIsomorphicLayoutEffect } from "_hooks/layout-effect/layout-effect.hook";

export function useWindow(): Window | null {
  const [windowObject, setWindowObject] = useState<Window | null>(null);
  useIsomorphicLayoutEffect(() => {
    setWindowObject(window);
  }, []);

  return windowObject;
}
