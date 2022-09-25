import React from 'react';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { astroTheme } from './astro-theme';

export interface AstroThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const AstroThemeProvider: React.FC<AstroThemeProviderProps> = props => {
  const { children, theme: ownerTheme } = props;
  const [theme, setTheme] = React.useState<Theme>(astroTheme());

  React.useEffect(() => {
    const isLightTheme = document.body.classList.contains('light-theme');

    if (isLightTheme) {
      setTheme(astroTheme('light'));
    }
  }, []);

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
