import { PerlinConfig } from "_contexts/canvas/Canvas.context.types";
import { LocalStorageTheme } from "_hooks/theme/theme.hook.types";
import { Theme } from "_types/theme.types";

export function loadPerlinConfig(): PerlinConfig | null {
  try {
    const perlinConfig = localStorage.getItem("perlinConfig");
    if (!perlinConfig) {
      return null;
    }
    return JSON.parse(perlinConfig);
  } catch (e) {
    console.log(e);
    return null;
  }
}

export function savePerlinConfig(config: PerlinConfig) {
  try {
    localStorage.setItem("perlinConfig", JSON.stringify(config));
  } catch (e) {
    console.log(e);
  }
}

export function deletePerlinConfig() {
  try {
    localStorage.removeItem("perlinConfig");
  } catch (e) {
    console.log(e);
  }
}

export function loadTheme(): LocalStorageTheme {
  try {
    const storageTheme = localStorage.getItem("theme") as LocalStorageTheme;
    if (!storageTheme) {
      return null;
    }
    return ["light", "dark"].includes(storageTheme) ? storageTheme : null;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export function saveTheme(theme: Theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    console.log(e);
  }
}

export function getCanvasControlsFirstVisit() {
  try {
    return !localStorage.getItem("canvasControlVisited");
  } catch (e) {
    return false;
  }
}

export function setCanvasControlsVisitHappened() {
  try {
    localStorage.setItem("canvasControlVisited", "true");
  } catch (e) {
    console.log(e);
  }
}
