export type Mode = 'light' | 'dark';
export type AstroThemeClasses = 'dark-theme' | 'light-theme';

declare module '@mui/material' {
  interface AstroTheme {
    astro: {
      background: {
        base: {
          default: string;
          header: string;
          hover: string;
          selected: string;
        };
        surface: {
          default: string;
          header: string;
          hover: string;
          selected: string;
        };
        interactive: {
          default: string;
          hover: string;
        };
      };
      border: {
        interactive: {
          default: string;
        };
        width: {
          sm: string;
        };
      };
      fontControl: {
        body1: {
          fontFamily: string;
          fontWeight: string;
          lineHeight: string;
          fontSize: string;
          letterSpacing: string;
        };
      };
      palette: {
        grey: {
          '100': string;
        };
      };
      radius: {
        base: string;
        circle: string;
      };
      spacing: Spacing;
      status: {
        caution: string;
        normal: string;
        standby: string;
      };
      text: {
        primary: string;
        secondary: string;
        placeholder: string;
        inverse: string;
        interactive: {
          default: string;
          hover: string;
        };
        white: string;
        black: string;
        error: string;
      };
    };
  }

  interface Theme extends AstroTheme {}
  interface ThemeOptions extends AstroTheme {}
}

interface Spacing {
  /**
   * Uses a factor of 4 formula i.e... (0.25 * factor)
   *
   * Examples:
   *
   * spacing(4) => 1rem
   *
   * spacing(2, 6) => 0.5rem 1.5rem
   *
   * spacing(0.5, 1, 0.25) => 0.125rem 1rem 0.0625rem
   *
   * spacing(1, 1, 4, 2.75) => 0.25rem 0.25rem 1rem 0.6875rem
   *
   */
  (allSides: number): string;
  (topBottom: number, rightLeft: number): string;
  (top: number, rightLeft: number, bottom: number): string;
  (top: number, right: number, bottom: number, left: number): string;
}
