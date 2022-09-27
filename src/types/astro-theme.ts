export interface AstroTheme {
  astro: {
    background: {
      base: {
        default: string;
        header: string;
        hover: string;
        selected: string;
      };
      surface: {
        default: string;
        header: string;
        hover: string;
        selected: string;
      };
      interactive: {
        default: string;
        hover: string;
      };
    };
    text: {
      primary: string;
      secondary: string;
      placeholder: string;
      inverse: string;
      interactive: {
        default: string;
        hover: string;
      };
      white: string;
      black: string;
      error: string;
    };
    border: {
      error: string;
      interactive: {
        default: string;
        hover: string;
        muted: string;
      };
      width: {
        none: number;
        xs: string;
        sm: string;
        lg: string;
      };
    };
    status: {
      critical: string;
      serious: string;
      caution: string;
      normal: string;
      standby: string;
      off: string;
    };
    classification: {
      topsecretsci: string;
      topsecret: string;
      secret: string;
      confidential: string;
      cui: string;
      unclassified: string;
    };
    shadow: {
      overlay: string;
    };
    opacity: {
      '25': string;
      '35': string;
      '40': string;
      '45': string;
      '50': string;
    };
    palette: {
      neutral: {
        '1000': string;
        '000': string;
      };
      darkblue: Color100To900 & {
        '950': string;
      };
      brightblue: Color100To900 & {
        '850': string;
      };
      grey: Color100To900 & {
        '250': string;
      };
      red: Color400To900;
      orange: Color400To900;
      yellow: Color400To900;
      green: Color400To900;
      cyan: Color400To900;
      violet: {
        '800': string;
      };
      blue: {
        '800': string;
      };
      teal: Color100To900;
      purple: Color100To900;
      pink: Color100To900;
      hotorange: Color100To900;
    };
    radius: {
      base: string;
      circle: string;
    };
    fontFamily: string;
    lineHeight: {
      '2xs': string;
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeight: {
      light: string;
      regular: string;
      medium: string;
      bold: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
    };
    letterSpacing: {
      '2xl': string;
      xl: string;
      base: string;
      lg: string;
      sm: string;
    };
    fontBody1: FontType & {
      bold: FontType;
    };
    fontBody2: FontType & {
      bold: FontType;
    };
    fontBody3: FontType & {
      bold: FontType;
    };
    fontControlBody1: FontType & {
      bold: FontType;
    };
    fontHeading1: FontType & {
      bold: FontType;
    };
    fontHeading2: FontType;
    fontHeading3: FontType;
    fontHeading4: FontType;
    fontHeading5: FontType;
    fontHeading6: FontType;
    fontDisplay1: FontType;
    fontDisplay2: FontType;
    fontMonospace: FontType;
    spacing: Spacing;
  };
}

type Color100To900 = {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

type Color400To900 = {
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

type FontType = {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  paragraphSpacing: number;
  textDecoration: string;
  textCase: string;
};

interface Spacing {
  /**
   * Uses a factor of 4 formula i.e... (0.25 * factor)
   *
   * Examples:
   *
   * spacing(4) => 1rem
   *
   * spacing(2, 6) => 0.5rem 1.5rem
   *
   * spacing(0.5, 1, 0.25) => 0.125rem 1rem 0.0625rem
   *
   * spacing(1, 1, 4, 2.75) => 0.25rem 0.25rem 1rem 0.6875rem
   *
   */
  (allSides: number): string;
  (topBottom: number, rightLeft: number): string;
  (top: number, rightLeft: number, bottom: number): string;
  (top: number, right: number, bottom: number, left: number): string;
}
