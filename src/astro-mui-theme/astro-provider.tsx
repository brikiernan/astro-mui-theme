import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Theme } from '@mui/material';
import type { Mode } from '../types/utils';
import { astroTheme } from './astro-theme';
import { handleOwnerTheme } from './handle-owner-theme';

export interface AstroThemeProviderProps {
  children: React.ReactNode;
  debug?: boolean;
  mode?: Mode;
  theme?: Theme;
}

export const AstroThemeProvider: React.FC<AstroThemeProviderProps> = props => {
  const { children, debug = false, mode, theme: ownerTheme } = props;
  const [theme, setTheme] = React.useState<Theme>(astroTheme(mode));

  React.useEffect(() => {
    if (debug) {
      console.log('[THEME OUTPUT]:', theme);
    }
  }, [theme]);

  React.useEffect(() => {
    const astro = astroTheme(mode);

    setTheme(() => {
      if (!ownerTheme) return astro;
      return handleOwnerTheme(astro, ownerTheme, debug);
    });
  }, [debug, mode, ownerTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
