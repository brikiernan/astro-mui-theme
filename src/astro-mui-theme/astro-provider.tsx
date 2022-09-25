import React from 'react';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { astroTheme } from './astro-theme';
import { Mode } from './types';

export interface AstroThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
  mode?: Mode;
}

export const AstroThemeProvider: React.FC<AstroThemeProviderProps> = props => {
  const { children, theme: ownerTheme, mode } = props;
  const memoizedTheme = React.useMemo(() => astroTheme(), []);
  const [theme, setTheme] = React.useState<Theme>(memoizedTheme);

  React.useEffect(() => {
    setTheme(astroTheme(mode));
  }, [mode]);

  // useEffect(() => console.log('[THEME]:', theme), [theme]);

  React.useEffect(() => {
    if (!ownerTheme) return;

    setTheme(astroTheme => ({
      // owner override
      ...astroTheme,
      ...ownerTheme,
      components: {
        // astro override
        ...ownerTheme.components,
        ...astroTheme.components,
      },
      palette: {
        // owner override
        ...ownerTheme.palette,
        ...astroTheme.palette,
        background: {
          // astro override
          ...astroTheme.palette.background,
          ...ownerTheme.palette.background,
        },
      },
    }));
  }, [ownerTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
