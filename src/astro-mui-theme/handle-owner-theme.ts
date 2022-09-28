import { Theme } from '@mui/material';

export const handleOwnerTheme = (
  astroTheme: Theme,
  ownerTheme: Theme,
  debug: boolean
): Theme => {
  if (debug) {
    console.log('[ASTRO THEME]:', astroTheme);
    console.log('[OWNER THEME]:', ownerTheme);
  }

  return {
    // owner overrides
    ...astroTheme,
    ...ownerTheme,
    components: {
      ...astroTheme.components,
      ...ownerTheme.components,
    },
  };
};