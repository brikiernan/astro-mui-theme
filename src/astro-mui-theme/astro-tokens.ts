import system from '@astrouxds/design-tokens/dist/json/base.system.json';
import reference from '@astrouxds/design-tokens/dist/json/base.reference.json';
import lightTheme from '@astrouxds/design-tokens/dist/json/theme.light.json';
import type { AstroTheme } from '../types/astro-theme';
import type { Mode } from '../types/utils';

export const astroTokens = (mode: Mode): AstroTheme['astro'] => {
  const isLightTheme = mode === 'light';

  // @ts-ignore
  let theme: typeof lightTheme = {
    'color-background-base-default': system['color-background-base-default'],
    'color-text-primary': system['color-text-primary'],
  };

  if (isLightTheme) {
    // prettier-ignore
    theme['color-background-base-default'] = lightTheme['color-background-base-default'];
    theme['color-text-primary'] = lightTheme['color-text-primary'];
  }

  return {
    background: {
      base: {
        default: theme['color-background-base-default'],
        header: system['color-background-base-header'],
        hover: system['color-background-base-hover'],
        selected: system['color-background-base-selected'],
      },
      interactive: {
        default: system['color-background-interactive-default'],
        hover: system['color-background-interactive-hover'],
      },
      surface: {
        default: system['color-background-surface-default'],
        header: system['color-background-surface-header'],
        hover: system['color-background-surface-hover'],
        selected: system['color-background-surface-selected'],
      },
    },
    border: {
      interactive: {
        default: system['color-border-interactive-default'],
      },
      width: {
        sm: reference['border-width-sm'],
      },
    },
    fontControl: {
      body1: {
        fontFamily: reference['font-control-body-1-font-family'],
        fontSize: reference['font-control-body-1-font-size'],
        fontWeight: reference['font-control-body-1-font-weight'],
        lineHeight: reference['font-control-body-1-line-height'],
        letterSpacing: reference['font-control-body-1-letter-spacing'],
      },
    },
    palette: {
      grey: {
        '100': reference['color-palette-grey-100'],
      },
    },
    radius: {
      base: reference['radius-base'],
      circle: reference['radius-circle'],
    },
    spacing: (...factors: number[]): string => {
      // astro spacing formula
      const rems = factors.map(factor => `${0.25 * factor}rem`);
      return rems.slice(0, 4).join().replace(/[,]/g, ' ');
    },
    status: {
      caution: system['color-status-caution'],
      normal: system['color-status-normal'],
      standby: system['color-status-standby'],
    },
    text: {
      primary: theme['color-text-primary'],
      secondary: system['color-text-secondary'],
      placeholder: system['color-text-placeholder'],
      inverse: system['color-text-inverse'],
      interactive: {
        default: system['color-text-interactive-default'],
        hover: system['color-text-interactive-hover'],
      },
      black: system['color-text-black'],
      error: system['color-text-error'],
      white: system['color-text-white'],
    },
  };
};
