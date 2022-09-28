import { createTheme } from '@mui/material';
import type { Mode } from '../types/utils';
import type { AstroTheme } from '../types/astro-theme';
import { astroTokens } from './astro-tokens';

declare module '@mui/material' {
  interface ThemeOptions extends AstroTheme {}
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
      grey: {
        '100': astro.palette.grey['100'],
      },
    },
    shape: {
      borderRadius: parseInt(astro.radius.base.charAt(0)),
    },
    typography: {
      fontFamily: astro.typography.fontFamily,
      button: astro.typography.body1,
      body1: astro.typography.body1,
    },
    /* -- Start default Mui component overrides -- */
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          disableRipple: true,
          variant: 'contained',
        },
        styleOverrides: {
          contained: {
            color: astro.color.text.inverse,
            backgroundColor: astro.color.background.interactive.default,
            borderRadius: astro.radius.base,
            '&:hover': {
              backgroundColor: astro.color.background.interactive.hover,
            },
          },
          root: {
            padding: astro.spacing(2, 4),
            textTransform: 'none',
            ...astro.typography.body1,
          },
        },
      },
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
              paddingLeft: astro.spacing(3),
              marginLeft: astro.spacing(1),
            },
            '&.MuiListItemButton-divider': {
              borderBottomWidth: astro.color.border.width.sm,
              borderBottomStyle: 'solid',
              borderBottomColor: astro.color.text.inverse,
            },
            gap: astro.spacing(4),
            padding: astro.spacing(1, 4),
          },
        },
      },
    },
  });
};
