import * as React from 'react';
import * as deepmerge from 'deepmerge';
import * as Color from 'color';
import { DeepPartial } from 'redux';

import {
  buttonBaseOverrideName,
  ButtonBaseProps,
  buttonOverrideName,
  ButtonProps
} from '../../components/atoms/Button';
import { cardOverrideName, CardProps } from '../../components/atoms/Card';
import { codeOverrideName, CodeProps } from '../../components/atoms/Code';
import {
  modalContainerOverrideName,
  ModalContainerProps
} from '../../components/atoms/ModalContainer';
import { popoverOverrideName, PopoverProps } from '../../components/atoms/Popover';
import { tagOverrideName, TagProps } from '../../components/atoms/Tag';
import { tooltipOverrideName, TooltipProps } from '../../components/molecules/Tooltip';
import { headingOverrideName, HeadingProps } from '../../components/atoms/Typography/Heading';
import { textOverrideName, TextProps } from '../../components/atoms/Typography/Text';
import { alertOverrideName, AlertProps } from '../../components/molecules/Alert';
import { menuOverrideName, MenuProps } from '../../components/molecules/Menu';
import { modalOverrideName, ModalProps } from '../../components/molecules/Modal';
import Global from '../global';
import { snackbarOverrideName, SnackbarProps } from '../../components/molecules/Snackbar';

export interface IThemeCodePalette {
  window: {
    background: string;
    color: string;
  };
  meta: string;
  number: string;
  keyword: string;
  def: string;
  variable: [string, string, string];
  type: string;
  property: string;
  operator: string;
  string: [string, string];
  comment: string;
  link: string;
  atom: string;
  error: string;
  tag: string;
  attribute: string;
  qualifier: string;
  bracket: string;
  builtin: string;
  special: string;
  cursor: string;
  activeLineBackground: string;
  guttersBackground: string;
  gutterMarker: string;
  gutterMarkerSubtle: string;
  lineNumber: string;
  matchingBracket: {
    background: string;
    color: string;
  };
  selectedBackground: string;
  hintsCustom: {
    color: string;
    background: string;
  };
  hintsCustomActive: {
    background: string;
    color: string;
  };
}

export interface IThemePalette {
  primary: string;
  secondary: string;
  disabled: string;
  success: string;
  danger: string;
  warning: string;
  cardBackground: string;
  code: IThemeCodePalette;
}

export type ThemeTypographyStyle = Pick<
  React.CSSProperties,
  | 'fontFamily'
  | 'fontSize'
  | 'letterSpacing'
  | 'lineHeight'
  | 'textTransform'
  | 'fontStyle'
  | 'fontVariant'
  | 'color'
  | 'fontWeight'
>;

export interface IThemeTypography {
  hero: ThemeTypographyStyle;
  h1: ThemeTypographyStyle;
  h2: ThemeTypographyStyle;
  h3: ThemeTypographyStyle;
  h4: ThemeTypographyStyle;
  h5: ThemeTypographyStyle;
  h6: ThemeTypographyStyle;
  button: ThemeTypographyStyle;
  link: ThemeTypographyStyle;
  body: ThemeTypographyStyle;
  caption: ThemeTypographyStyle;
  label: ThemeTypographyStyle;
  tooltip: ThemeTypographyStyle;
  formField: ThemeTypographyStyle;
  codeBlock: ThemeTypographyStyle;
  codeLine: ThemeTypographyStyle;
}

interface IThemeOverrides {
  [buttonBaseOverrideName]?: React.ComponentType<ButtonBaseProps>;
  [buttonOverrideName]?: React.ComponentType<ButtonProps>;
  [cardOverrideName]?: React.ComponentType<CardProps>;
  [codeOverrideName]?: React.ComponentType<CodeProps>;
  [modalContainerOverrideName]?: React.ComponentType<ModalContainerProps>;
  [popoverOverrideName]?: React.ComponentType<PopoverProps>;
  [snackbarOverrideName]?: React.ComponentType<SnackbarProps>;
  [tagOverrideName]?: React.ComponentType<TagProps>;
  [tooltipOverrideName]?: React.ComponentType<TooltipProps>;
  [headingOverrideName]?: React.ComponentType<HeadingProps>;
  [textOverrideName]?: React.ComponentType<TextProps>;
  [alertOverrideName]?: React.ComponentType<AlertProps>;
  [menuOverrideName]?: React.ComponentType<MenuProps>;
  [modalOverrideName]?: React.ComponentType<ModalProps>;
}

export interface ITheme {
  palette: IThemePalette;
  typography: IThemeTypography;
  overrides: IThemeOverrides;
}

export type IThemeInput = DeepPartial<ITheme>;

// base theme

const baseCodeThemePalette: IThemeCodePalette = {
  window: {
    background: '#222222',
    color: '#A9B7C6'
  },
  meta: '#BBB529',
  number: '#6897BB',
  keyword: '#CC7832',
  def: '#A9B7C6',
  variable: ['#A9B7C6', '#A9B7C6', '#9876AA'],
  type: '#AABBCC',
  property: '#FFC66D',
  operator: '#A9B7C6',
  string: ['#6A8759', '#6A8759'],
  comment: '#61A151',
  link: '#CC7832',
  atom: '#CC7832',
  error: '#BC3F3C',
  tag: '#629755',
  attribute: '#6897bb',
  qualifier: '#6A8759',
  bracket: '#A9B7C6',
  builtin: '#FF9E59',
  special: '#FF9E59',
  cursor: '#A9B7C6',
  activeLineBackground: '#323232',
  guttersBackground: '#292b2d',
  gutterMarker: '#FFEE80',
  gutterMarkerSubtle: '#D0D0D0',
  lineNumber: '#606366',
  matchingBracket: {
    background: '#3B514D',
    color: '#FFEF28'
  },
  selectedBackground: '#214283',
  hintsCustom: {
    color: '#9C9E9E',
    background: '#3B3E3F'
  },
  hintsCustomActive: {
    background: '#494D4E',
    color: '#9C9E9E'
  }
};

const baseTheme: ITheme = {
  palette: {
    primary: '#005AE5',
    secondary: '#222222',
    disabled: 'darkgrey',
    success: '#35a537',
    danger: '#e2353d',
    warning: '#e2c81c',
    cardBackground: 'white',
    code: baseCodeThemePalette
  },
  typography: {
    hero: {
      color: 'black',
      fontFamily: '"Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif',
      fontSize: '128px',
      fontWeight: 700,
      lineHeight: 0.9
    },
    h1: {
      color: 'black',
      fontFamily: '"Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif',
      fontSize: '60px',
      fontWeight: 700,
      lineHeight: 1
    },
    h2: {
      color: 'black',
      fontFamily: '"Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif',
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.04
    },
    h3: {
      color: 'black',
      fontFamily: '"Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif',
      fontSize: '34px',
      fontWeight: 700,
      lineHeight: 1.17
    },
    h4: {
      color: 'black',
      fontFamily: '"Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: 1.33
    },
    h5: {
      color: 'black',
      fontFamily: '"Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: 1.6
    },
    h6: {
      color: 'black',
      fontFamily: '"Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif',
      fontSize: '16px',
      fontWeight: 700
    },
    button: {
      color: 'black',
      fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',
      fontSize: '14px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 2
    },
    link: {
      color: 'black',
      fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',
      fontSize: '16px',
      fontWeight: 400
    },
    body: {
      color: 'black',
      fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.35
    },
    caption: {
      color: 'rgba(0, 0, 0, 0.5)',
      fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',
      fontSize: '14px',
      fontWeight: 400
    },
    label: {
      color: 'rgba(0, 0, 0, 0.5)',
      fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',
      fontSize: '14px',
      fontWeight: 400
    },
    tooltip: {
      color: 'black',
      fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.35
    },
    formField: {
      color: 'black',
      fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.35
    },
    codeBlock: {
      fontFamily:
        'Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif',
      fontSize: '14px',
      lineHeight: 1.5
    },
    codeLine: {
      fontFamily:
        "Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, serif",
      fontSize: '12px',
      lineHeight: 1.5
    }
  },
  overrides: {}
};

// create theme from input

export const createTheme = (themeInput?: IThemeInput): ITheme => {
  return deepmerge<ITheme>(baseTheme, (themeInput || {}) as Partial<ITheme>);
};

export function getBWContrastingColor(color: string): string {
  return Color(color)
    .darken(0.1)
    .isDark()
    ? 'white'
    : 'black';
}

export function getPaletteColorOrDefault(color: string, palette: IThemePalette): string {
  return palette.hasOwnProperty(color) ? palette[color] : color;
}

// In order to have self-supporting components, we rely on default theme when not provided.
Global.__DEFAULT_THEME__ = (Global.__DEFAULT_THEME__ || createTheme()) as ITheme;

const defaultTheme = Global.__DEFAULT_THEME__;

const ThemeContext = React.createContext<ITheme>(defaultTheme);

/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */

interface IThemeProviderViewModel {
  theme: ITheme;
}

type ThemeProviderProps = IThemeProviderViewModel;

export const ThemeConsumer = ThemeContext.Consumer;

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export const useOverride = <T extends keyof IThemeOverrides>(
  componentKey: T
): IThemeOverrides[T] => {
  return React.useContext(ThemeContext).overrides[componentKey];
};

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
  const { children, theme: localTheme } = props;

  const outerTheme = useTheme();
  const theme = outerTheme === defaultTheme ? localTheme : { ...outerTheme, ...localTheme };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

// TODO: create withTheme HOC
