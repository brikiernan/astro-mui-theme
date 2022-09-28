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

const handleOwnerTheme = (astro: Theme, owner: Theme): Theme => ({
  // owner override all
  ...astro,
  ...owner,
  components: {
    // astro override all components
    ...owner.components,
    ...astro.components,
  },
});

export const AstroThemeProvider: React.FC<AstroThemeProviderProps> = props => {
  const { children, mode, theme: ownerTheme } = props;
  const [theme, setTheme] = React.useState<Theme>(astroTheme(mode));

  React.useEffect(() => console.log(theme), [theme]);

  React.useEffect(() => {
    const astro = astroTheme(mode);

    setTheme(() => {
      if (!ownerTheme) return astro;
      return handleOwnerTheme(astro, ownerTheme);
    });
  }, [mode, ownerTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
