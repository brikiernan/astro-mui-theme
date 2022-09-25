import type { AstroTheme } from './astro-theme';

export type AstroThemeClasses = 'dark-theme' | 'light-theme';

declare module '@mui/material' {
  interface Theme extends AstroTheme {}
}
