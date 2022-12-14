import { createTheme } from '@mui/material';
import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import type { Mode } from '../types/global';
import type { AstroTheme } from '../types/astro-theme';
import { astroTokens } from './astro-tokens';

// allow configuration in the createTheme() below
declare module '@mui/material' {
  interface ThemeOptions extends AstroTheme {}

  interface TypographyVariantsOptions {
    body3?: TypographyStyleOptions;
    display1?: TypographyStyleOptions;
    display2?: TypographyStyleOptions;
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
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: astro.color.background.surface.default,
          },
        },
        defaultProps: {
          disablePadding: true,
        },
      },
      MuiListItemButton: {
        defaultProps: {
          disableRipple: true,
          divider: true,
        },
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: astro.color.background.surface.hover,
            },
            '&.Mui-selected': {
              backgroundColor: astro.color.background.surface.selected,
              boxShadow: `-4px 0 0 0 ${astro.color.border.interactive.default}`,
              marginLeft: astro.spacing(1),
              paddingLeft: astro.spacing(3),
            },
            '&.MuiListItemButton-divider': {
              borderBottomWidth: astro.border.width.sm,
              borderBottomStyle: 'solid',
              borderBottomColor: astro.color.text.inverse,
            },
            paddingRight: astro.spacing(4),
            paddingLeft: astro.spacing(4),
          },
        },
      },
    },
  });
};
