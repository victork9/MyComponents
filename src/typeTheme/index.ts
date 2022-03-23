export interface Itheme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    green: string;
    whiteSecondary: string;
    danger: string;
    dark: string;
    darkOpacity: string;
    grey: string;
    warning: string;
  };
  fontSize: {
    sm: number;
    md: number;
    lg: number;
    xs: number;
    xm: number;
    xl: number;
    xxs: number;
    xxm: number;
    xxl: number;
  };
}

export const MyTheme: Itheme = {
  colors: {
    primary: '#48abf7',
    secondary: '#1f283e',
    white: '#fff',
    whiteSecondary: '#f1f1f1',
    green: '#31ce36',
    danger: '#ff5c54',
    dark: '#444',
    darkOpacity: '#575962',
    grey: '#495057',
    warning: '#ffad46',
  },
  fontSize: {
    sm: 1.4,
    md: 1.8,
    lg: 2,
    xs: 2.2,
    xm: 2.4,
    xl: 2.8,
    xxs: 3,
    xxm: 3.4,
    xxl: 3.6,
  },
};
