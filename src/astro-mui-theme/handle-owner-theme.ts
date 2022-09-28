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
      // owner overrides
      ...astroTheme.components,
      ...ownerTheme.components,
    },
    palette: {
      // astro overrides
      ...astroTheme.palette,
    },
    // typography: {
    //   // astro overrides
    //   ...ownerTheme.typography,
    //   ...astroTheme.typography,
    // },
  };
};
