import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Theme } from '@mui/material';
import type { Mode } from '../types/utils';
import { astroTheme } from './astro-theme';

export interface AstroThemeProviderProps {
  children: React.ReactNode;
  mode?: Mode;
}

export const AstroThemeProvider: React.FC<AstroThemeProviderProps> = props => {
  const { children, mode } = props;
  const [theme, setTheme] = React.useState<Theme>(astroTheme(mode));

  React.useEffect(() => {
    console.log('[ASTRO THEME PROVIDER]:', theme);
  }, [theme]);

  React.useEffect(() => setTheme(astroTheme(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
