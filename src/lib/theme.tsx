import * as React from 'react';

import Global from './global';
import { CSSProperties } from 'react';
import * as Color from 'color';

interface ThemePalette {
  primaryColor: string;
  secondaryColor: string;
  background: string;
}

type ThemeTypographyStyle = Required<
  Pick<CSSProperties, 'fontFamily' | 'fontSize' | 'fontWeight' | 'color'>
> &
  Partial<
    Pick<
      CSSProperties,
      'letterSpacing' | 'lineHeight' | 'textTransform' | 'fontStyle' | 'fontVariant'
    >
  >;

interface ThemeTypography {
  fontFamily: CSSProperties['fontFamily'];
  fontSize: CSSProperties['fontSize'];

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
  code: ThemeTypographyStyle;
}

export interface Theme {
  palette: ThemePalette;
  typography: ThemeTypography;
}

export const createTheme = (): Theme => {
  const rootFontSize = 16;
  const headerFontFamily = '"Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif';
  const textFontFamily = '"Source Sans Pro", Helvetica, Arial, sans-serif';

  return {
    palette: {
      primaryColor: '#005AE5',
      secondaryColor: '#222222',
      background: 'white'
    },
    typography: {
      fontFamily: textFontFamily,
      fontSize: rootFontSize,
      hero: {
        color: 'black',
        fontFamily: headerFontFamily,
        fontSize: rootFontSize * 8,
        fontWeight: 700,
        lineHeight: 0.75
      },
      h1: {
        color: 'black',
        fontFamily: headerFontFamily,
        fontSize: rootFontSize * 3.75,
        fontWeight: 700,
        lineHeight: 1
      },
      h2: {
        color: 'black',
        fontFamily: headerFontFamily,
        fontSize: rootFontSize * 3,
        fontWeight: 700,
        lineHeight: 1.04
      },
      h3: {
        color: 'black',
        fontFamily: headerFontFamily,
        fontSize: rootFontSize * 2.125,
        fontWeight: 700,
        lineHeight: 1.17
      },
      h4: {
        color: 'black',
        fontFamily: headerFontFamily,
        fontSize: rootFontSize * 1.5,
        fontWeight: 700,
        lineHeight: 1.33
      },
      h5: {
        color: 'black',
        fontFamily: headerFontFamily,
        fontSize: rootFontSize * 1.25,
        fontWeight: 700,
        lineHeight: 1.6
      },
      h6: {
        color: 'black',
        fontFamily: headerFontFamily,
        fontSize: rootFontSize,
        fontWeight: 700
      },
      button: {
        color: 'black',
        fontFamily: textFontFamily,
        fontSize: rootFontSize * 0.875,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: 2
      },
      link: {
        color: 'black',
        fontFamily: textFontFamily,
        fontSize: rootFontSize,
        fontWeight: 400
      },
      body: {
        color: 'black',
        fontFamily: textFontFamily,
        fontSize: rootFontSize * 0.875,
        fontWeight: 400,
        lineHeight: 1.35
      },
      caption: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: textFontFamily,
        fontSize: rootFontSize * 0.75,
        fontWeight: 400
      },
      label: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: textFontFamily,
        fontSize: rootFontSize * 0.75,
        fontWeight: 400
      },
      tooltip: {
        color: 'black',
        fontFamily: textFontFamily,
        fontSize: rootFontSize * 0.875,
        fontWeight: 400,
        lineHeight: 1.35
      },
      formField: {
        color: 'black',
        fontFamily: textFontFamily,
        fontSize: rootFontSize * 0.875,
        fontWeight: 400,
        lineHeight: 1.35
      },
      code: {
        color: 'black',
        fontFamily: '"Lucida Console", Monaco, monospace',
        fontSize: rootFontSize * 0.75,
        fontWeight: 400
      }
    }
  };
};

export const getBWContrastingColor = (color: string) => {
  return Color(color)
    .darken(0.1)
    .isDark()
    ? 'white'
    : 'black';
};

// In order to have self-supporting components, we rely on default theme when not provided.
Global.__DEFAULT_THEME__ = (Global.__DEFAULT_THEME__ || createTheme()) as Theme;

const defaultTheme = Global.__DEFAULT_THEME__;

const ThemeContext = React.createContext<Theme>(defaultTheme);

/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */

interface IThemeProviderViewModel {
  theme: Theme;
}

type ThemeProviderProps = IThemeProviderViewModel;

export const ThemeConsumer = ThemeContext.Consumer;

export const ThemeProvider: React.SFC<ThemeProviderProps> = props => {
  const { children, theme: localTheme } = props;

  return (
    <ThemeConsumer>
      {outerTheme => {
        const theme = outerTheme === defaultTheme ? localTheme : { ...outerTheme, ...localTheme };

        return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
      }}
    </ThemeConsumer>
  );
};

// TODO: create withTheme HOC
