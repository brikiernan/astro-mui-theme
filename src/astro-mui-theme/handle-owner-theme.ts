import { Theme } from '@mui/material';

export const handleOwnerTheme = (
  astroTheme: Theme,
  ownerTheme: Theme,
  debug: boolean
): Theme => {
  if (debug) {
    console.log('[ASTRO THEME]', astroTheme);
    console.log('[OWNER THEME]', ownerTheme);
  }

  return {
    // owner override all
    ...astroTheme,
    ...ownerTheme,
    components: {
      // astro override all components
      ...ownerTheme.components,
      ...astroTheme.components,
    },
  };
};
