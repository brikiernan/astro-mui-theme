import system from '@astrouxds/tokens/dist/json/base.system.json';
import reference from '@astrouxds/tokens/dist/json/base.reference.json';
import component from '@astrouxds/tokens/dist/json/base.component.json';
import lightTheme from '@astrouxds/tokens/dist/json/theme.light.json';
import type { AstroTheme } from '../types/astro-theme';
import type { Mode } from '../types/utils';

// prettier-ignore
export const astroTokens = (mode: Mode): AstroTheme['astro'] => {
  const isLightTheme = mode === 'light';

  let theme: typeof lightTheme = {
    'gsb-icon-color-fill-default': component['gsb-icon-color-fill-default'],
    'gsb-icon-color-fill-hover': component['gsb-icon-color-fill-hover'],
    'gsb-color-background': component['gsb-color-background'],
    'gsb-color-text': component['gsb-color-text'],
    'scrollbar-shadow-inner-vertical': component['scrollbar-shadow-inner-vertical'],
    'scrollbar-shadow-inner-horizontal': component['scrollbar-shadow-inner-horizontal'],
    'tag-shadow-inner-pass': component['tag-shadow-inner-pass'],
    'tag-shadow-inner-fail': component['tag-shadow-inner-fail'],
    'tag-shadow-inner-unknown': component['tag-shadow-inner-unknown'],
    'color-background-base-default': system['color-background-base-default'],
    'color-background-base-header': system['color-background-base-header'],
    'color-background-base-hover': system['color-background-base-hover'],
    'color-background-base-selected': system['color-background-base-selected'],
    'color-background-surface-default': system['color-background-surface-default'],
    'color-background-surface-header': system['color-background-surface-header'],
    'color-background-surface-hover': system['color-background-surface-hover'],
    'color-background-surface-selected': system['color-background-surface-selected'],
    'color-background-interactive-default': system['color-background-interactive-default'],
    'color-background-interactive-hover': system['color-background-interactive-hover'],
    'color-text-primary': system['color-text-primary'],
    'color-text-secondary': system['color-text-secondary'],
    'color-text-placeholder': system['color-text-placeholder'],
    'color-text-inverse': system['color-text-inverse'],
    'color-text-interactive-default': system['color-text-interactive-default'],
    'color-text-interactive-hover': system['color-text-interactive-hover'],
    'color-text-error': system['color-text-error'],
    'color-border-interactive-default': system['color-border-interactive-default'],
    'color-border-interactive-hover': system['color-border-interactive-hover'],
    'color-border-interactive-muted': system['color-border-interactive-muted'],
    'color-border-error': system['color-border-error'],
    'shadow-overlay':system ['shadow-overlay'],
  };

  if (isLightTheme) {
    theme['gsb-icon-color-fill-default'] = lightTheme['gsb-icon-color-fill-default'];
    theme['gsb-icon-color-fill-hover'] = lightTheme['gsb-icon-color-fill-hover'];
    theme['gsb-color-background'] = lightTheme['gsb-color-background'];
    theme['gsb-color-text'] = lightTheme ['gsb-color-text'];
    theme['scrollbar-shadow-inner-vertical'] = lightTheme ['scrollbar-shadow-inner-vertical'];
    theme['scrollbar-shadow-inner-horizontal'] = lightTheme ['scrollbar-shadow-inner-horizontal'];
    theme['tag-shadow-inner-pass'] = lightTheme ['tag-shadow-inner-pass'];
    theme['tag-shadow-inner-fail'] = lightTheme ['tag-shadow-inner-fail'];
    theme['tag-shadow-inner-unknown'] = lightTheme ['tag-shadow-inner-unknown'];
    theme['color-background-base-default'] = lightTheme['color-background-base-default'];
    theme['color-background-base-header'] = lightTheme['color-background-base-header'];
    theme['color-background-base-hover'] = lightTheme['color-background-base-hover'];
    theme['color-background-base-selected'] = lightTheme['color-background-base-selected'];
    theme['color-background-surface-default'] = lightTheme['color-background-surface-default'];
    theme['color-background-surface-header'] = lightTheme['color-background-surface-header'];
    theme['color-background-surface-hover'] = lightTheme['color-background-surface-hover'];
    theme['color-background-surface-selected'] = lightTheme['color-background-surface-selected'];
    theme['color-background-interactive-default'] = lightTheme['color-background-interactive-default'];
    theme['color-background-interactive-hover'] = lightTheme['color-background-interactive-hover'];
    theme['color-text-primary'] = lightTheme['color-text-primary'];
    theme['color-text-secondary'] = lightTheme['color-text-secondary'];
    theme['color-text-placeholder'] = lightTheme['color-text-placeholder'];
    theme['color-text-inverse'] = lightTheme['color-text-inverse'];
    theme['color-text-interactive-default'] = lightTheme['color-text-interactive-default'];
    theme['color-text-interactive-hover'] = lightTheme['color-text-interactive-hover'];
    theme['color-text-error'] = lightTheme['color-text-error'];
    theme['color-border-interactive-default'] = lightTheme['color-border-interactive-default'];
    theme['color-border-interactive-hover'] = lightTheme['color-border-interactive-hover'];
    theme['color-border-interactive-muted'] = lightTheme['color-border-interactive-muted'];
    theme['color-border-error'] = lightTheme['color-border-error'];
    theme['shadow-overlay'] = lightTheme['shadow-overlay'];
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
      error: '',
      interactive: {
        default: system['color-border-interactive-default'],
        hover: system['color-border-interactive-hover'],
        muted: system['color-border-interactive-muted'],
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
      neutral: {
        '1000': reference['color-palette-neutral-1000'],
        '000': reference['color-palette-neutral-000']
      },
      brightblue: {
        '100': reference['color-palette-brightblue-100'],
        '200': reference['color-palette-brightblue-200'],
        '300': reference['color-palette-brightblue-300'],
        '400': reference['color-palette-brightblue-400'],
        '500': reference['color-palette-brightblue-500'],
        '600': reference['color-palette-brightblue-600'],
        '700': reference['color-palette-brightblue-700'],
        '800': reference['color-palette-brightblue-800'],
        '850': reference['color-palette-brightblue-850'],
        '900': reference['color-palette-brightblue-900'],
      },
      darkblue: {
        '100': reference['color-palette-darkblue-100'],
        '200': reference['color-palette-darkblue-200'],
        '300': reference['color-palette-darkblue-300'],
        '400': reference['color-palette-darkblue-400'],
        '500': reference['color-palette-darkblue-500'],
        '600': reference['color-palette-darkblue-600'],
        '700': reference['color-palette-darkblue-700'],
        '800': reference['color-palette-darkblue-800'],
        '900': reference['color-palette-darkblue-900'],
        '950': reference['color-palette-darkblue-950'],
      },
      grey: {
        '100': reference['color-palette-grey-100'],
        '200': reference['color-palette-grey-200'],
        '250': reference['color-palette-grey-250'],
        '300': reference['color-palette-grey-300'],
        '400': reference['color-palette-grey-400'],
        '500': reference['color-palette-grey-500'],
        '600': reference['color-palette-grey-600'],
        '700': reference['color-palette-grey-700'],
        '800': reference['color-palette-grey-800'],
        '900': reference['color-palette-grey-900'],
      },
      red: {
        '400': reference['color-palette-red-400'],
        '500': reference['color-palette-red-500'],
        '600': reference['color-palette-red-600'],
        '700': reference['color-palette-red-700'],
        '800': reference['color-palette-red-800'],
        '900': reference['color-palette-red-900'],
      },
      orange: {
        '400': reference['color-palette-orange-400'],
        '500': reference['color-palette-orange-500'],
        '600': reference['color-palette-orange-600'],
        '700': reference['color-palette-orange-700'],
        '800': reference['color-palette-orange-800'],
        '900': reference['color-palette-orange-900'],
      },
      yellow: {
        '400': reference['color-palette-yellow-400'],
        '500': reference['color-palette-yellow-500'],
        '600': reference['color-palette-yellow-600'],
        '700': reference['color-palette-yellow-700'],
        '800': reference['color-palette-yellow-800'],
        '900': reference['color-palette-yellow-900'],
      },
      green: {
        '400': reference['color-palette-green-400'],
        '500': reference['color-palette-green-500'],
        '600': reference['color-palette-green-600'],
        '700': reference['color-palette-green-700'],
        '800': reference['color-palette-green-800'],
        '900': reference['color-palette-green-900'],
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
      critical: system['color-status-critical'],
      serious: system['color-status-serious'],
      caution: system['color-status-caution'],
      normal: system['color-status-normal'],
      standby: system['color-status-standby'],
      off: system['color-status-off']
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
