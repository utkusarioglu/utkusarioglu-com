import { useState } from "react";
import { useWindow } from "_hooks/window/window.hook";
import { type Theme } from "_types/theme.types";
import { getHtmlElement } from "_utils/element.utils";
import { loadTheme, saveTheme } from "_utils/local-storage.utils";
import type { ThemeHookState, UseThemeReturn } from "./theme.hook.types";
import { useIsomorphicLayoutEffect } from "_hooks/layout-effect/layout-effect.hook";

const initialProps: ThemeHookState = {
  system: "light",
  local: null,
  combined: "light",
};

function getActive(): Theme {
  const html = getHtmlElement();
  return html.classList.contains("dark") ? "dark" : "light";
}

function setActive(theme: Theme) {
  const html = getHtmlElement();
  if (theme === "light") {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }
}

function toggleActive() {
  let newActive: Theme = "light";
  if (getActive() === "light") {
    newActive = "dark";
  }
  setActive(newActive);
  return newActive;
}

export function useTheme(): UseThemeReturn {
  const window = useWindow();
  const [themeProps, setThemeProps] = useState(initialProps);
  useIsomorphicLayoutEffect(() => {
    let system: Theme = "light";
    let local: Theme = loadTheme();

    if (window) {
      system = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    const combined = (local ? local : system) as Theme;

    setThemeProps({ system, local, combined });
  }, [window]);

  return {
    ...themeProps,
    setActive,
    getActive,
    toggleActive,
    saveTheme,
    loadTheme,
  };
}
