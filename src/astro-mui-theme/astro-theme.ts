import { createTheme } from '@mui/material';
import type { Mode } from '../types/global';
import type { AstroTheme } from '../types/astro-theme';
import { astroTokens } from './astro-tokens';

declare module '@mui/material' {
  interface ThemeOptions extends AstroTheme {}
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
    display1: React.CSSProperties;
    display2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    display1: true;
    display2: true;
  }
}

export const astroTheme = (mode: Mode = 'dark') => {
  const astro = astroTokens(mode);

  return createTheme({
    astro,
    palette: {
      common: {
        black: astro.color.text.black,
        white: astro.color.text.white,
      },
      /* -- throws unsupported format error for var() -- */
      primary: {
        main: astro.color.text.interactive.default,
      },
      secondary: {
        main: astro.color.text.interactive.hover,
      },
      error: {
        main: astro.color.text.error,
      },
      warning: {
        main: astro.color.status.caution,
      },
      info: {
        main: astro.color.status.standby,
      },
      success: {
        main: astro.color.status.normal,
      },
      text: {
        primary: astro.color.text.primary,
        // does NOT throw
        secondary: astro.color.text.secondary,
      },
      /* -- end unsupported errors -- */
      divider: astro.color.text.primary,
      background: {
        default: astro.color.background.base.default,
        paper: astro.color.background.surface.default,
      },
      action: {
        hover: astro.color.background.base.default,
        selected: astro.color.background.base.selected,
      },
    },
    shape: {
      borderRadius: parseInt(astro.radius.base.charAt(0)),
    },
    typography: {
      fontFamily: astro.typography.fontFamily,
      button: astro.typography.body1,
      body1: astro.typography.body1,
      body2: astro.typography.body2,
      body3: astro.typography.body3,
      display1: astro.typography.display1,
      display2: astro.typography.display2,
      h1: astro.typography.h1,
      h2: astro.typography.h2,
      h3: astro.typography.h3,
      h4: astro.typography.h4,
      h5: astro.typography.h5,
      h6: astro.typography.h6,
    },
    /* -- Start default Mui component overrides -- */
    components: {},
  });
};
