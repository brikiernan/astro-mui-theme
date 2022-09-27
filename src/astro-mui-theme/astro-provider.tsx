import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Theme } from '@mui/material';
import type { Mode } from '../types/utils';
import { astroTheme } from './astro-theme';

export interface AstroThemeProviderProps {
  children: React.ReactNode;
  mode?: Mode;
  theme?: Theme;
}

export const AstroThemeProvider: React.FC<AstroThemeProviderProps> = props => {
  const { children, mode, theme: ownerTheme } = props;
  const [theme, setTheme] = React.useState<Theme>(astroTheme(mode));

  React.useEffect(() => {
    console.log('[ASTRO THEME PROVIDER]:', theme);
  }, [theme]);

  React.useEffect(() => {
    console.log('[OWNER THEME]:', ownerTheme);
  }, [ownerTheme]);

  React.useEffect(() => setTheme(astroTheme(mode)), [mode]);

  // React.useEffect(() => {
  //   if (!ownerTheme) return;

  //   setTheme(astroTheme => ({
  //     // owner override
  //     ...astroTheme,
  //     ...ownerTheme,
  //     components: {
  //       // astro override
  //       ...ownerTheme.components,
  //       ...astroTheme.components,
  //     },
  //     palette: {
  //       // owner override
  //       ...ownerTheme.palette,
  //       ...astroTheme.palette,
  //       background: {
  //         // astro override
  //         ...astroTheme.palette.background,
  //         ...ownerTheme.palette.background,
  //       },
  //     },
  //   }));
  // }, [ownerTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
