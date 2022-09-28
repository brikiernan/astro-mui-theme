import type { AstroTheme } from './astro-theme';

export type AstroThemeClasses = 'dark-theme' | 'light-theme';
export type Mode = 'light' | 'dark';

declare module '@mui/material' {
  interface Theme extends AstroTheme {}
}
