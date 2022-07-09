import { type Theme } from "_types/theme.types";
import { loadTheme, saveTheme } from "_utils/local-storage.utils";

export type UseThemeReturn = ThemeHookState & {
  getActive: () => Theme;
  setActive: (theme: Theme) => void;
  toggleActive: () => Theme;
  loadTheme: typeof loadTheme;
  saveTheme: typeof saveTheme;
};
export interface ThemeHookState {
  system: Theme;
  local: Theme;
  combined: Theme;
}
