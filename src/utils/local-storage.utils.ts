import { PerlinConfig } from "_hooks/perlin/perlin.hook.types";
import { Theme } from "_types/theme.types";

export function loadPerlinConfig(): PerlinConfig | null {
  try {
    return JSON.parse(localStorage.getItem("perlinConfig"));
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

export function loadTheme(): Theme | null {
  try {
    const storageTheme = localStorage.getItem("theme") as Theme;
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
